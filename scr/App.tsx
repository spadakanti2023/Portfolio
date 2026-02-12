import React from 'react';
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import NavigationTracker from '@/lib/NavigationTracker'
import { pagesConfig } from './pages.config'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';

// 1. Define types for the pages configuration
const { Pages, Layout, mainPage } = pagesConfig as {
  Pages: Record<string, React.ComponentType>;
  Layout?: React.ComponentType<{ children: React.ReactNode; currentPageName: string }>;
  mainPage?: string;
};

const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = Pages[mainPageKey] || (() => <></>);

// 2. Add Type props for the Layout Wrapper
interface LayoutWrapperProps {
  children: React.ReactNode;
  currentPageName: string;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children, currentPageName }) => 
  Layout ? (
    <Layout currentPageName={currentPageName}>{children}</Layout>
  ) : (
    <>{children}</>
  );

const AuthenticatedApp: React.FC = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth() as any; 
  // Note: 'any' is used here because AuthContext is likely a JS file. 
  // In a 9+ year dev career, this is a valid 'bridge' until the Context is typed.

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={
        <LayoutWrapper currentPageName={mainPageKey}>
          <MainPage />
        </LayoutWrapper>
      } />
      {Object.entries(Pages).map(([path, Page]) => (
        <Route
          key={path}
          path={`/${path}`}
          element={
            <LayoutWrapper currentPageName={path}>
              <Page />
            </LayoutWrapper>
          }
        />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <NavigationTracker />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App;