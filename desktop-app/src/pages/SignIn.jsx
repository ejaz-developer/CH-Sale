import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { FiShoppingCart, FiBarChart, FiUsers, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';

const SignInPage = () => {
  const features = [
    {
      icon: FiShoppingCart,
      title: 'Advanced Point of Sale',
      description:
        'Process transactions quickly with our intuitive POS interface designed for speed and efficiency.',
    },
    {
      icon: FiBarChart,
      title: 'Real-time Analytics',
      description:
        'Get instant insights into your business performance with comprehensive reporting and analytics.',
    },
    {
      icon: FiUsers,
      title: 'Customer Management',
      description:
        'Build lasting relationships with powerful customer management and loyalty tracking tools.',
    },
    {
      icon: FiTrendingUp,
      title: 'Business Growth',
      description:
        'Scale your business with tools designed to help you grow and optimize operations.',
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description:
        'Enterprise-grade security ensures your data and transactions are always protected.',
    },
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'Built for performance with optimized workflows that keep your business moving.',
    },
  ];

  return (
    <div className="min-h-screen gradient-animation flex">
      {/* Left Section - Features */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-yellow-500/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center p-12 text-white">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">₽</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-glow">POS System</h1>
                <p className="text-cyan-300">Skardu Elite</p>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-glow mb-4">Welcome Back!</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Sign in to access your powerful business management platform and continue growing your
              success.
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

      {/* Right Section - Sign In Form */}
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
            <p className="text-white/70">Sign in to your account</p>
          </div>

          {/* Clerk SignIn Component */}
          <div className=" p-8 rounded-2xl border border-white/20">
            <SignIn
              routing="path"
              path="/sign-in"
              signUpUrl="/sign-up"
              appearance={{
                elements: {
                  formButtonPrimary:
                    'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300',
                  card: 'bg-transparent shadow-none',
                  headerTitle: 'text-white text-2xl font-bold',
                  headerSubtitle: 'text-white/70',
                  socialButtonsBlockButton: 'border border-white/20 text-white hover:bg-white/10',
                  formFieldInput:
                    'bg-white/10 border border-white/20 text-white placeholder-white/60',
                  formFieldLabel: 'text-white font-medium',
                  footerActionText: 'text-white/70',
                  footerActionLink: 'text-cyan-400 hover:text-cyan-300',
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

export default SignInPage;
