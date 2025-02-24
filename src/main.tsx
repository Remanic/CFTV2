
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './components/ui/loading-spinner';
import './index.css';

// Lazy load the main App component
const App = lazy(() => import('./App.tsx'));

// Main entry point
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingSpinner />}>
    <App />
  </Suspense>
);
