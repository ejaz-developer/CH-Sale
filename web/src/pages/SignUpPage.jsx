import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

const SignUpPage = () => {
  const benefits = [
    'Free 30-day trial',
    'No setup fees',
    'Cancel anytime',
    '24/7 support included'
  ];

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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Benefits */}
          <div className="lg:order-1 order-2">
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Start Your
                <br />
                <span className="bg-gradient-to-r from-persian to-saffron bg-clip-text text-transparent">
                  Free Trial
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Join thousands of businesses already using CH Sale to grow their revenue.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-persian to-saffron rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-white text-sm" />
                  </div>
                  <span className="text-slate-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">1000+</div>
                <div className="text-slate-400 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-slate-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-slate-400 text-sm">Countries</div>
              </div>
            </div>
          </div>

          {/* Right side - Sign up form */}
          <div className="lg:order-2 order-1">
            <div className="text-center mb-8 lg:hidden">
              <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
              <p className="text-slate-300">Get started with CH Sale today</p>
            </div>

            {/* Glass container for Clerk SignUp */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-persian/10 to-saffron/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <div className="hidden lg:block text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
                  <p className="text-slate-300">Get started with CH Sale today</p>
                </div>
                
                <SignUp 
                  routing="path" 
                  path="/sign-up"
                  redirectUrl="/dashboard"
                  signInUrl="/sign-in"
                />
              </div>
            </div>

            {/* Additional links */}
            <div className="text-center mt-6">
              <p className="text-slate-400">
                Already have an account?{' '}
                <Link to="/sign-in" className="text-persian hover:text-saffron transition-colors font-semibold">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;