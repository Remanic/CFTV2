
import { Suspense, lazy, ComponentType, LazyExoticComponent } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface LazyLoadProps {
  component: LazyExoticComponent<ComponentType<any>>;
  fallback?: React.ReactNode;
  props?: Record<string, any>;
}

export const LazyLoad = ({ 
  component: Component, 
  fallback = <div className="py-8 flex justify-center"><LoadingSpinner /></div>,
  props = {}
}: LazyLoadProps) => {
  return (
    <Suspense fallback={fallback}>
      <Component {...props} />
    </Suspense>
  );
};

export const createLazyComponent = <T extends object>(importer: () => Promise<{ default: ComponentType<T> }>) => {
  return lazy(importer);
};
