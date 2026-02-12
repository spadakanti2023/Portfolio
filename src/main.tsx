import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App' // Note: You can drop the .jsx extension in imports
import '@/index.css'

// The '!' at the end is the "Non-null assertion operator"
// It tells TypeScript: "I am a Senior Dev, I know the 'root' div exists in index.html"
const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)