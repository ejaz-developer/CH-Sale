import React from 'react';

function LoadingSpinner({ size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Outer spinning ring */}
        <div
          className={`${sizeClasses[size]} rounded-full border-2 border-gray-600 border-t-transparent animate-spin`}
        ></div>

        {/* Inner gradient ring */}
        <div
          className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-2 border-transparent border-t-orange-500 animate-spin`}
          style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
        ></div>

        {/* Center glow effect */}
        <div
          className={`absolute inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-sm animate-pulse`}
        ></div>
      </div>
    </div>
  );
}

// Full page loading component
export function FullPageLoading({ message = 'Loading...' }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10">
          <LoadingSpinner size="xl" />
          <p className="text-white text-lg mt-4 animate-pulse">{message}</p>
          <p className="text-gray-400 text-sm mt-2">Please wait while we load your content</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
