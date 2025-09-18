import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">
                CH<span className="text-orange-400">POS</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Revolutionizing point of sale systems for modern businesses. Streamline your
              operations with our comprehensive solution.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-3 hover:bg-gray-800/50 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-3 hover:bg-gray-800/50 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 p-3 hover:bg-gray-800/50 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Product</h4>
            <ul className="space-y-4">
              {[
                { name: 'Features', href: '/#features' },
                { name: 'Pricing', href: '/#pricing' },
                { name: 'Demo', href: '/demo' },
                { name: 'Desktop App', href: '/desktop' },
                { name: 'Payments', href: '/payments' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-4">
              {[
                { name: 'Help Center', href: '/help' },
                { name: 'Contact Us', href: '/contact' },
                { name: 'Documentation', href: '/docs' },
                { name: 'API Reference', href: '/api' },
                { name: 'Status Page', href: '/status' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-sm">support@pospro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-sm">
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-sm font-semibold text-white mb-4">Stay Updated</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} CHPOS. All rights reserved.
            </p>

            <div className="flex items-center space-x-8 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 px-2 py-1"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 px-2 py-1"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 px-2 py-1"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
