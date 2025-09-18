import React from 'react';

const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="min-h-screen gradient-animation flex items-center justify-center">
      <div className="text-center">
        {/* Animated spinner */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-500 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-emerald-500 rounded-full animate-ping mx-auto opacity-20"></div>
        </div>

        {/* Loading message */}
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-2">{message}</h2>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-radial from-emerald-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;