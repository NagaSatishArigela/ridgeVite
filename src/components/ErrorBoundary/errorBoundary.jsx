import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const errorHandler = (event) => {
      console.error('Caught error:', event.message);
      setErrorMessage(event.message || 'An unexpected error occurred');
      setHasError(true);
    };

    // Listen for unhandled errors in the app
    window.addEventListener('error', errorHandler);

    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  // Render fallback UI when an error is caught
  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
        <div className="flex flex-col items-center">
          <div className="text-9xl text-red-500 mb-6">😓</div>
          <h1 className="text-4xl font-bold text-red-600">Something Went Wrong</h1>
          <p className="mt-4 text-lg text-gray-600">{errorMessage}</p>
          <p className="mt-2 text-lg text-gray-600">Please refresh the page or contact support if the problem persists.</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;
