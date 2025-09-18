import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const SignInPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-persian rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-saffron rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-sandy rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-burnt rounded-full opacity-30 animate-ping"></div>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 -left-40 w-80 h-80 bg-gradient-radial from-persian/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-radial from-saffron/15 to-transparent rounded-full blur-3xl"></div>

      {/* Back to home link */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 flex items-center space-x-2 text-slate-300 hover:text-white transition-colors group"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Home</span>
      </Link>

      {/* Logo in top center */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-persian to-saffron rounded-xl flex items-center justify-center shadow-glow">
            <span className="text-white font-bold text-lg">₽</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">CH Sale</h1>
            <p className="text-xs text-persian">POS System</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-300">Sign in to your CH Sale account</p>
        </div>

        {/* Glass container for Demo SignIn */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-persian/10 to-saffron/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-charcoal border border-white/20 rounded-lg p-3 text-white placeholder-slate-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-slate-300 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-charcoal border border-white/20 rounded-lg p-3 text-white placeholder-slate-400"
                  placeholder="Enter your password"
                />
              </div>
              <Link
                to="/dashboard"
                className="w-full bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Additional links */}
        <div className="text-center mt-8">
          <p className="text-slate-400">
            Don't have an account?{' '}
            <Link to="/sign-up" className="text-persian hover:text-saffron transition-colors font-semibold">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Feature highlights */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm mb-4">Trusted by businesses worldwide</p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-lg font-bold text-white">1000+</div>
              <div className="text-xs text-slate-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">99.9%</div>
              <div className="text-xs text-slate-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">24/7</div>
              <div className="text-xs text-slate-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;