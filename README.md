🚀 [Project Name] | Full-Stack Portfolio
Developed by [Your Name] Senior Java Full Stack Developer | 9+ Years of Experience

📖 Overview
This project is a high-performance, secure web application built to showcase modern full-stack architecture. Originally prototyped with Base44 AI, it has been manually refactored into a strict TypeScript and Vite environment to ensure enterprise-grade stability, type safety, and security.

🛠️ Core Tech Stack
Frontend: React 18, TypeScript, Tailwind CSS, Framer Motion

UI Components: Radix UI, Lucide React, Shadcn/UI

Build Tool: Vite (Optimized for HMR and fast deployments)

Backend Integration: Base44 SDK / [Optional: Spring Boot Microservices]

✨ Key Features & Technical Highlights
Type-Safe UI Components: Implemented custom forwardRef patterns for Input, Textarea, and Button to ensure seamless integration with 3rd-party form libraries.

Responsive Modern Design: A mobile-first, dark-themed UI featuring glassmorphism and smooth motion transitions.

Security First: Audited and patched dependency vulnerabilities (XSS and Prototype Pollution) inherited from initial boilerplate code.

Dynamic Utility System: Custom cn utility for robust Tailwind class merging, preventing style collisions.

⚙️ Local Development Setup
1. Prerequisites
Node.js (v18.0.0 or higher)

npm or yarn

2. Installation
Bash
# Clone the repository
git clone [Your-Repo-URL]

# Install dependencies
npm install
3. Environment Configuration
Create a .env.local file in the root directory and add your Base44 credentials:

Code snippet
VITE_BASE44_APP_ID=your_app_id
VITE_BASE44_APP_BASE_URL=your_backend_url
4. Run the Application
Bash
npm run dev
