import React, { lazy, Suspense, useState } from 'react';
import Loader from './Loader';

const MainContent = lazy(() => import('./MainContent'));

const App = () => {
  const [isLoaderComplete, setLoaderComplete] = useState(false);

  const handleLoaderComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <>
      {!isLoaderComplete && <Loader onComplete={handleLoaderComplete} />}
      {isLoaderComplete && (
        <Suspense fallback={<Loader />}>
          <MainContent />
        </Suspense>
      )}
    </>
  );
};

export default App;
