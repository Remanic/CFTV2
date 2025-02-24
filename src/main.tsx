
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './components/ui/loading-spinner';
import './index.css';

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Create a loading component
<lov-write file_path="src/components/ui/loading-spinner.tsx">
export const LoadingSpinner = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
);
