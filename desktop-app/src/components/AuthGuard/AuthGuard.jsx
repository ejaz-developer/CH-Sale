import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

const AuthGuard = ({ children }) => {
  const { isAuthenticated, isLoading, isOffline, user } = useAuth();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Show offline indicator if in offline mode
  if (isOffline) {
    return (
      <div className="min-h-screen gradient-animation">
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black px-4 py-2 text-center z-50">
          <span className="font-medium">
            ⚠️ Offline Mode - Limited functionality available
          </span>
        </div>
        <div className="pt-10">
          {children}
        </div>
      </div>
    );
  }

  return children;
};

export default AuthGuard;