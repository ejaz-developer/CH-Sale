import Link from 'next/link';
import {
  ArrowRight,
  Check,
  Star,
  Shield,
  Zap,
  BarChart3,
  Users,
  Globe,
  Smartphone,
} from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 mt-12">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Gradient Orbs for Glow Effect - Responsive positioning */}
        <div className="absolute top-10 left-4 sm:top-20 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                Revolutionize
              </span>
              <br />
              <span className="text-white">Your Business</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              The ultimate POS system that transforms how you manage sales, inventory, and customer
              relationships. Built for modern businesses that demand excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4 sm:px-0">
              <Link
                href="/sign-up"
                className="group w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/download"
                className="group w-full sm:w-auto border-2 border-gray-600 hover:border-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-orange-500/10 hover:shadow-xl hover:shadow-orange-500/10 text-center"
              >
                Download Desktop App
              </Link>
            </div>

            <div className="pt-6 sm:pt-8 text-gray-400">
              <p className="text-xs sm:text-sm">Trusted by 10,000+ businesses worldwide</p>
              <div className="flex justify-center items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-orange-400 text-orange-400" />
                ))}
                <span className="ml-2 text-white font-semibold text-sm sm:text-base">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto text-center leading-relaxed px-4 sm:px-0">
              Powerful features designed to streamline your operations and boost your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Real-time Analytics',
                description:
                  'Get instant insights into your sales performance, inventory levels, and customer behavior with our advanced analytics dashboard.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Secure & Reliable',
                description:
                  'Bank-grade security with 99.9% uptime guarantee. Your data is protected with end-to-end encryption.',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Lightning Fast',
                description:
                  'Process transactions in milliseconds with our optimized checkout system. No more waiting, just seamless experiences.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Customer Management',
                description:
                  'Build lasting relationships with comprehensive customer profiles, purchase history, and loyalty programs.',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Multi-location Support',
                description:
                  'Manage multiple stores from one central dashboard. Perfect for growing businesses and franchises.',
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Desktop Application',
                description:
                  'Powerful desktop application for Windows, Mac, and Linux. Full offline support with secure EasyPaisa and JazzCash integration.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-orange-500/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-orange-400 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Simple,{' '}
              <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                Transparent
              </span>{' '}
              Pricing
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              Choose the perfect plan for your business. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-4xl mx-auto">
            {[
              {
                name: 'Free',
                price: '₨0',
                description: 'Perfect to get started',
                features: [
                  'Up to 100 products',
                  'Basic inventory management',
                  'Simple reports',
                  'Cart functionality',
                  'Email support',
                ],
                isPopular: false,
              },
              {
                name: 'Pro',
                price: '₨1,500',
                description: 'Everything you need to grow',
                features: [
                  'Unlimited products',
                  'Advanced inventory tracking',
                  'Detailed reports & analytics',
                  'Loss and profit tracking',
                  'PDF exports',
                  'Advanced cart features',
                  'Priority support',
                  'More features coming soon',
                ],
                isPopular: true,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.isPopular
                    ? 'border-orange-500 shadow-2xl shadow-orange-500/20 sm:scale-105'
                    : 'border-gray-700 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
                    {plan.description}
                  </p>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm sm:text-base">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sign-up"
                  className={`block w-full text-center py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-700 hover:bg-orange-500 text-white hover:shadow-lg'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10"></div>
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 max-w-xs sm:max-w-xl lg:max-w-2xl mx-auto text-center leading-relaxed">
            Join thousands of successful businesses already using our POS system. Start your free
            trial today and see the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href="/sign-up"
              className="group w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="text-gray-400 text-xs sm:text-sm text-center space-y-1">
              <p>✓ 14-day free trial</p>
              <p>✓ No credit card required</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
