import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiStar, FiTrendingUp, FiShoppingCart, FiUsers, FiBarChart, FiZap } from 'react-icons/fi';

const LandingPage = () => {
  // Demo mode - assume not signed in
  const isSignedIn = false;

  const features = [
    {
      icon: FiShoppingCart,
      title: 'Point of Sale',
      description: 'Fast and intuitive POS system for seamless transactions'
    },
    {
      icon: FiBarChart,
      title: 'Analytics & Reports',
      description: 'Comprehensive insights to grow your business'
    },
    {
      icon: FiUsers,
      title: 'Customer Management',
      description: 'Build lasting relationships with your customers'
    },
    {
      icon: FiZap,
      title: 'Real-time Sync',
      description: 'Instant synchronization across all your devices'
    }
  ];

  const benefits = [
    'Cloud-based with offline capabilities',
    'Multi-device synchronization',
    'Advanced reporting and analytics',
    'Customer loyalty programs',
    'Inventory management',
    '24/7 customer support'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
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

      {/* Header */}
      <header className="relative z-10 pt-6 pb-4">
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-persian to-saffron rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-lg">₽</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">CH Sale</h1>
              <p className="text-xs text-persian">POS System</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              >
                <span>Dashboard</span>
                <FiArrowRight />
              </Link>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="text-slate-300 hover:text-white transition-colors px-4 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
            <FiStar className="text-saffron" />
            <span className="text-sm text-slate-300">Trusted by 1000+ businesses worldwide</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              Modern POS
            </span>
            <br />
            <span className="bg-gradient-to-r from-persian to-saffron bg-clip-text text-transparent">
              for Smart Business
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Streamline your sales, manage inventory, and grow your business with our powerful 
            cloud-based Point of Sale system designed for modern entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {!isSignedIn && (
              <Link
                to="/sign-up"
                className="bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3 group"
              >
                <span>Start Free Trial</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            <Link
              to="/plans"
              className="bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-3"
            >
              <FiTrendingUp />
              <span>View Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Everything You Need</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Powerful features designed to help your business succeed in today's competitive market
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-persian/10 to-saffron/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-persian to-saffron rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-persian to-saffron bg-clip-text text-transparent">CH Sale</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Built for modern businesses that demand reliability, scalability, and seamless user experience.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-persian to-saffron rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-white text-sm" />
                  </div>
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-persian/20 to-saffron/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">1000+</div>
                  <div className="text-slate-300 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-slate-300 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-slate-300 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-slate-300 text-sm">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isSignedIn && (
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using CH Sale to grow their revenue and streamline operations.
            </p>
            <Link
              to="/sign-up"
              className="bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-3 group"
            >
              <span>Start Your Free Trial</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-persian to-saffron rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">₽</span>
            </div>
            <span className="text-white font-semibold">CH Sale</span>
          </div>
          <p className="text-slate-400">© 2024 CH Sale. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;