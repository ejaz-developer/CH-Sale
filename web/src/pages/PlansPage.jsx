import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowLeft, FiStar, FiZap, FiTrendingUp } from 'react-icons/fi';

const PlansPage = () => {
  // Demo mode - assume not signed in
  const isSignedIn = false;
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      icon: FiStar,
      description: 'Perfect for small businesses getting started',
      monthly: 29,
      yearly: 290,
      color: 'from-charcoal to-persian',
      features: [
        'Up to 1,000 transactions/month',
        'Single device access',
        'Basic reporting',
        'Email support',
        'Cloud sync',
        'Basic inventory management'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: FiZap,
      description: 'Ideal for growing businesses',
      monthly: 79,
      yearly: 790,
      color: 'from-persian to-saffron',
      features: [
        'Up to 10,000 transactions/month',
        'Up to 5 devices',
        'Advanced reporting & analytics',
        'Priority email & chat support',
        'Real-time sync',
        'Advanced inventory management',
        'Customer loyalty programs',
        'Multi-location support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: FiTrendingUp,
      description: 'For large businesses with advanced needs',
      monthly: 199,
      yearly: 1990,
      color: 'from-saffron to-burnt',
      features: [
        'Unlimited transactions',
        'Unlimited devices',
        'Custom reporting & analytics',
        '24/7 phone & priority support',
        'Advanced integrations',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced security features',
        'Custom training',
        'API access'
      ],
      popular: false
    }
  ];

  const handleSelectPlan = (planName) => {
    // In a real app, this would integrate with Stripe or another payment processor
    alert(`Selected ${planName} plan. Payment integration would happen here.`);
  };

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
          <div className="flex items-center space-x-4">
            <Link
              to={isSignedIn ? "/dashboard" : "/"}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors group"
            >
              <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-persian to-saffron rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">₽</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CH Sale</h1>
                <p className="text-xs text-persian">Pricing Plans</p>
              </div>
            </div>
          </div>
          
          {!isSignedIn && (
            <div className="flex items-center space-x-4">
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
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Hero section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-persian to-saffron bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Unlock the full potential of your business with our flexible pricing plans. 
            Start with a free trial and upgrade when you're ready.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-persian to-saffron text-white shadow-glow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-persian to-saffron text-white shadow-glow'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-1 -right-1 bg-saffron text-charcoal-darkest text-xs px-2 py-0.5 rounded-full font-bold">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative group ${plan.popular ? 'lg:-mt-4' : ''}`}>
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-persian to-saffron text-white px-6 py-2 rounded-full text-sm font-bold shadow-glow">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-300 blur-xl`}></div>
              
              {/* Card */}
              <div className={`relative bg-white/5 backdrop-blur-xl border transition-all duration-300 rounded-3xl p-8 ${
                plan.popular 
                  ? 'border-persian/50 shadow-glow lg:py-12' 
                  : 'border-white/10 group-hover:border-white/20'
              }`}>
                
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <plan.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.monthly : plan.yearly}
                    </span>
                    <span className="text-slate-400 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-persian text-sm">
                      Save ${(plan.monthly * 12) - plan.yearly} per year
                    </p>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-persian to-saffron rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FiCheck className="text-white text-xs" />
                      </div>
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                  }`}
                >
                  {isSignedIn ? 'Upgrade to ' + plan.name : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ/Additional info */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Questions about pricing?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              All plans include a 30-day free trial. No setup fees, no contracts. 
              Cancel or change your plan anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/sign-up"
                className="bg-gradient-to-r from-persian to-saffron hover:shadow-glow text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <a 
                href="mailto:support@chsale.com"
                className="text-slate-300 hover:text-white transition-colors px-8 py-4"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlansPage;