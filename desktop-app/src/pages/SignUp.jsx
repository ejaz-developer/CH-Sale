import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { FiCheckCircle, FiStar, FiAward, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';

const SignUpPage = () => {
  const benefits = [
    {
      icon: FiCheckCircle,
      title: 'Complete Business Solution',
      description: 'Everything you need to run your business efficiently in one powerful platform.',
    },
    {
      icon: FiStar,
      title: 'Premium Features',
      description:
        'Access advanced analytics, inventory management, and customer relationship tools.',
    },
    {
      icon: FiAward,
      title: 'Industry Leading',
      description: 'Trusted by thousands of businesses worldwide for reliability and performance.',
    },
    {
      icon: FiTrendingUp,
      title: 'Boost Your Revenue',
      description: 'Optimize operations and increase sales with data-driven insights and tools.',
    },
    {
      icon: FiShield,
      title: 'Bank-Level Security',
      description: 'Your data is protected with enterprise-grade security and encryption.',
    },
    {
      icon: FiZap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our intuitive setup process and onboarding.',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50M+', label: 'Transactions' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen gradient-animation flex">
      {/* Left Section - Benefits */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 left-20 w-40 h-40 bg-pink-500/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
          <div className="absolute top-1/2 right-10 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">₽</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-glow">POS System</h1>
                <p className="text-purple-300">Skardu Elite</p>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-glow mb-4">
              Join Thousands of Successful Businesses
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Create your account and start transforming your business with our comprehensive POS
              solution.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 glass-dark rounded-xl border border-white/10"
                >
                  <div className="text-2xl font-bold text-purple-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 glass-dark rounded-xl border border-white/10"
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <Icon className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile header for small screens */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">₽</span>
              </div>
              <h1 className="text-2xl font-bold text-white text-glow">POS System</h1>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Get Started Today</h2>
            <p className="text-white/70">Create your account</p>
          </div>

          {/* Clerk SignUp Component */}
          <div className=" p-8 rounded-2xl border border-white/20">
            <SignUp
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
              appearance={{
                elements: {
                  formButtonPrimary:
                    'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-purple-500 transition-all duration-300',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-white text-2xl font-bold',
                  headerSubtitle: 'text-white/70',
                  socialButtonsBlockButton: 'border border-white/20 text-white hover:bg-white/10',
                  formFieldInput:
                    'bg-white/10 border border-white/20 text-white placeholder-white/60',
                  formFieldLabel: 'text-white font-medium',
                  footerActionText: 'text-white/70',
                  footerActionLink: 'text-purple-400 hover:text-purple-300',
                  dividerLine: 'bg-white/20',
                  dividerText: 'text-white/60',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
