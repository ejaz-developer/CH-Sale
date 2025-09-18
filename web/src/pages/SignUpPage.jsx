import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Rocket, TrendingUp, Globe, Clock, ArrowLeft, Check, Star } from 'lucide-react';

function SignUpPage() {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get your POS system running in under 5 minutes with our guided setup process.',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Boost Sales',
      description: 'Increase your revenue by 25% on average with our intelligent sales insights.',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      description: 'Accept payments from customers worldwide with multi-currency support.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock customer support.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$29/month',
      description: 'Perfect for small businesses',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$79/month',
      description: 'Best for growing businesses',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'For large-scale operations',
      popular: false,
    },
  ];

  const benefits = [
    '14-day free trial, no credit card required',
    'Cancel anytime, no long-term contracts',
    'Free data migration from your current system',
    'Dedicated onboarding specialist',
    'Free training for your team',
    '99.9% uptime guarantee',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex">
      {/* Left Side - Feature Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 flex flex-col justify-center px-16 py-20">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-orange-400 transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Start your{' '}
                <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                  success story
                </span>{' '}
                today
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Join thousands of businesses already using POSPro to streamline their operations and
                boost their revenue.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 max-w-lg">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-orange-400 mb-1">10K+</div>
                <div className="text-gray-300 text-sm">Active Users</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">$50M+</div>
                <div className="text-gray-300 text-sm">Processed</div>
              </div>
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center">
                <div className="flex items-center justify-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="space-y-6 max-w-lg">
              <h3 className="text-white font-semibold text-lg">Why choose POSPro?</h3>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-orange-400 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1 text-sm">{feature.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-4 max-w-lg">
              <h3 className="text-white font-semibold text-lg">What's included:</h3>
              <div className="grid grid-cols-1 gap-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Preview */}
            <div className="space-y-4 max-w-lg">
              <h3 className="text-white font-semibold text-lg">Choose your plan:</h3>
              <div className="grid grid-cols-1 gap-2">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 ${
                      plan.popular
                        ? 'border-orange-500 bg-orange-500/10'
                        : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          plan.popular ? 'bg-orange-400' : 'bg-gray-500'
                        }`}
                      ></div>
                      <div>
                        <div className="text-white text-sm font-medium">{plan.name}</div>
                        <div className="text-gray-400 text-xs">{plan.description}</div>
                      </div>
                    </div>
                    <div className="text-white font-semibold text-sm">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8">
            <Link to="/" className="inline-flex items-center justify-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-white">
                POS<span className="text-orange-400">Pro</span>
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-white mb-2">Get Started Free</h2>
            <p className="text-gray-400">Create your account in minutes</p>
          </div>

          {/* Clerk Sign Up Component */}
          <div className="backdrop-blur-sm border border-gray-700/50 rounded-2xl p-10 shadow-2xl">
            <SignUp
              appearance={{
                elements: {
                  formButtonPrimary:
                    'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25',
                  card: 'bg-transparent shadow-none',
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
                  formFieldSuccessText: 'text-green-400',
                  formFieldErrorText: 'text-red-400',
                },
                layout: {
                  socialButtonsPlacement: 'top',
                },
              }}
              redirectUrl="/dashboard"
              signInUrl="/sign-in"
            />
          </div>

          {/* Footer Links */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <Link
                to="/sign-in"
                className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                Sign in here
              </Link>
            </p>
            <p className="text-gray-500 text-xs">
              By signing up, you agree to our{' '}
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

export default SignUpPage;
