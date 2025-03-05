
import { createRoot } from 'react-dom/client';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import './index.css';

// Prefetch critical resources
const prefetchCriticalResources = () => {
  // Prefetch critical routes
  const linkPrefetch = document.createElement('link');
  linkPrefetch.rel = 'prefetch';
  linkPrefetch.href = '/fafsa-guide';
  document.head.appendChild(linkPrefetch);
};

// Run prefetch after page load
window.addEventListener('load', prefetchCriticalResources);

// Use dynamic import with priority hints for the main App
const App = lazy(() => import('./App.tsx'));

// Main entry point with optimized loading
createRoot(document.getElementById("root")!).render(
  <Suspense fallback={
    <div className="h-screen w-full flex items-center justify-center">
      <LoadingSpinner />
    </div>
  }>
    <App />
  </Suspense>
);
