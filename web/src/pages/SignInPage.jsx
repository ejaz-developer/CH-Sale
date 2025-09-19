import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Shield, Zap, BarChart3, Users, ArrowLeft, Check } from 'lucide-react';

function SignInPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Bank-Grade Security',
      description:
        'Your data is protected with enterprise-level encryption and security protocols.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Performance',
      description: 'Process transactions in milliseconds with our optimized cloud infrastructure.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights into your business performance with advanced reporting.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Multi-user Support',
      description: 'Manage your team with role-based access and comprehensive user management.',
    },
  ];

  const benefits = [
    'Access your dashboard from anywhere',
    'Sync data across all devices',
    'Real-time inventory tracking',
    'Advanced sales reporting',
    'Customer relationship management',
    'Secure payment processing',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex">
      {/* Left Side - Feature Content */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden">
        {/* Gradient Orbs - Responsive positioning */}
        <div className="absolute top-10 left-10 lg:top-20 lg:left-20 w-48 h-48 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 lg:bottom-20 lg:right-20 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-20">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors duration-200 mb-8 lg:mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                Welcome back to{' '}
                <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                  POSPro
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg">
                Sign in to access your dashboard and continue managing your business with our
                powerful POS system.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-lg">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 lg:space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-gray-800/50 border border-gray-700 rounded-xl flex items-center justify-center text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 text-sm lg:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-xs lg:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="space-y-3 lg:space-y-4 max-w-lg">
              <h3 className="text-white font-semibold text-base lg:text-lg">
                What you get with POSPro:
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs lg:text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 lg:p-6 max-w-lg">
              <div className="flex items-center space-x-1 mb-2 lg:mb-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 lg:w-4 lg:h-4 bg-orange-400 rounded-full"></div>
                ))}
              </div>
              <p className="text-gray-300 text-xs lg:text-sm leading-relaxed mb-3 lg:mb-4">
                "POSPro transformed our business operations. The interface is intuitive, and the
                analytics help us make better decisions every day."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
                <div>
                  <p className="text-white text-xs lg:text-sm font-medium">Sarah Johnson</p>
                  <p className="text-gray-400 text-xs">CEO, Retail Plus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-1/2 xl:w-2/5 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-6 lg:mb-8">
            <Link to="/" className="inline-flex items-center justify-center mb-4 lg:mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">
                POS<span className="text-orange-400">Pro</span>
              </span>
            </Link>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-sm sm:text-base">Sign in to your account</p>
          </div>

          {/* Clerk Sign In Component */}
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary:
                  'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25',
                card: 'bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl lg:rounded-2xl shadow-2xl',
                headerTitle: 'text-white text-2xl font-bold',
                headerSubtitle: 'text-gray-400',
                socialButtonsBlockButton:
                  'border border-gray-600 hover:border-gray-500 bg-gray-700/50 hover:bg-gray-700 text-white transition-all duration-200',
                formFieldInput:
                  'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500',
                formFieldLabel: 'text-gray-300',
                dividerLine: 'bg-gray-600',
                dividerText: 'text-gray-400',
                formFieldAction: 'text-orange-400 hover:text-orange-300',
                footerActionLink: 'text-orange-400 hover:text-orange-300',
                identityPreviewText: 'text-gray-300',
                identityPreviewEditButton: 'text-orange-400 hover:text-orange-300',
              },
              layout: {
                socialButtonsPlacement: 'top',
              },
            }}
            redirectUrl="/dashboard"
            signUpUrl="/sign-up"
          />

          {/* Footer Links */}
          <div className="text-center mt-4 lg:mt-6 space-y-2">
            <p className="text-gray-400 text-xs sm:text-sm">
              Don't have an account?{' '}
              <Link
                to="/sign-up"
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                Sign up for free
              </Link>
            </p>
            <p className="text-gray-500 text-xs leading-relaxed">
              By signing in, you agree to our{' '}
              <Link
                to="/terms"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
