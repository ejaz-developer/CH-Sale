'use client';

import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-1/3 left-1/2 w-48 h-48 bg-orange-400/15 rounded-full blur-2xl animate-pulse delay-700"></div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl">
              <span className="text-white font-bold text-xl">CH</span>
            </div>
            <span className="text-3xl font-bold text-white">
              CH
              <span className="text-transparent bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text">
                POS
              </span>
            </span>
          </div>
        </div>

        {/* Advanced Loading Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 mx-auto">
            <div className="w-full h-full rounded-full border-4 border-gray-600 border-t-transparent animate-spin"></div>

            {/* Inner gradient ring */}
            <div
              className="absolute inset-0 w-full h-full rounded-full border-4 border-transparent border-t-orange-500 animate-spin"
              style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
            ></div>

            {/* Center glow */}
            <div className="absolute inset-2 bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-full blur-md animate-pulse"></div>

            {/* Inner dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 w-20 h-20 mx-auto">
            <div
              className="relative w-full h-full animate-spin"
              style={{ animationDuration: '3s' }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-orange-400 rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Loading Text with Animation */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white animate-pulse">
            Loading Your Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            Preparing your powerful POS system...
          </p>

          {/* Animated dots */}
          <div className="flex justify-center items-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto mt-8">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">Lightning Fast</p>
            <p className="text-gray-400 text-xs">Optimized Performance</p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">Secure</p>
            <p className="text-gray-400 text-xs">Bank-Grade Security</p>
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
            <p className="text-white text-sm font-medium">Analytics</p>
            <p className="text-gray-400 text-xs">Real-time Insights</p>
          </div>
        </div>

        {/* Loading Tips */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            <span className="text-orange-400 font-medium">Pro Tip:</span> Your data is encrypted and
            secure
          </p>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping delay-4000"></div>
      </div>
    </div>
  );
}
