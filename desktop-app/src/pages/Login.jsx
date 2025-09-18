import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { FiShoppingCart, FiBarChart, FiUsers, FiTrendingUp, FiShield, FiZap, FiWifi, FiWifiOff } from 'react-icons/fi';

const Login = () => {
  const { login, isAuthenticated, isLoading, isOffline } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [error, setError] = useState('');

  // Redirect to dashboard if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setError('');

    try {
      const result = await login();
      if (!result.success) {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const features = [
    {
      icon: FiShoppingCart,
      title: 'Advanced Point of Sale',
      description: 'Process transactions quickly with our intuitive POS interface designed for speed and efficiency.',
    },
    {
      icon: FiBarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your business performance with comprehensive reporting and analytics.',
    },
    {
      icon: FiUsers,
      title: 'Customer Management',
      description: 'Build lasting relationships with powerful customer management and loyalty tracking tools.',
    },
    {
      icon: FiTrendingUp,
      title: 'Business Growth',
      description: 'Scale your business with tools designed to help you grow and optimize operations.',
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with encrypted local storage and secure cloud synchronization.',
    },
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with offline capabilities ensuring your business never stops.',
    },
  ];

  return (
    <div className="min-h-screen gradient-animation flex">
      {/* Connection Status Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <div className={`flex items-center space-x-2 px-3 py-2 rounded-lg backdrop-blur-sm ${
          isOffline ? 'bg-red-500/20 text-red-300' : 'bg-green-500/20 text-green-300'
        }`}>
          {isOffline ? <FiWifiOff size={16} /> : <FiWifi size={16} />}
          <span className="text-sm">{isOffline ? 'Offline' : 'Online'}</span>
        </div>
      </div>

      {/* Left Section - Features */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl animate-float delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center p-12 w-full">
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">₽</span>
              </div>
              <h1 className="text-3xl font-bold text-white text-glow">POS System</h1>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Powerful Business Management Platform
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Secure authentication with enterprise-grade encryption and offline capabilities for uninterrupted business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 glass-dark rounded-xl border border-white/10"
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                    <Icon className="text-xl text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile header for small screens */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">₽</span>
              </div>
              <h1 className="text-2xl font-bold text-white text-glow">POS System</h1>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Welcome Back!</h2>
            <p className="text-white/70">Secure login to your account</p>
          </div>

          {/* Login Form */}
          <div className="p-8 rounded-2xl border border-white/20 glass-dark">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Sign In</h3>
              <p className="text-white/70">Access your secure POS dashboard</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* Offline Message */}
            {isOffline && (
              <div className="mb-6 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-300 text-sm">
                  You're currently offline. Limited functionality may be available.
                </p>
              </div>
            )}

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={isLoggingIn || isLoading}
              className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                isLoggingIn || isLoading
                  ? 'bg-gray-500 cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 hover:shadow-lg hover:shadow-cyan-500/25'
              }`}
            >
              {isLoggingIn ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In with Secure Authentication'
              )}
            </button>

            {/* Security Features */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-white font-semibold mb-4">Security Features:</h4>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center space-x-3">
                  <FiShield className="text-green-400" size={16} />
                  <span className="text-white/70 text-sm">End-to-end encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiZap className="text-blue-400" size={16} />
                  <span className="text-white/70 text-sm">Offline capability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FiUsers className="text-purple-400" size={16} />
                  <span className="text-white/70 text-sm">Multi-user support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;