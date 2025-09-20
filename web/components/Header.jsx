'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useUser, UserButton, SignInButton } from '@clerk/nextjs';
import { useState } from 'react';

function Header() {
  const { isSignedIn } = useUser();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 py-2">
            <span className="text-lg sm:text-xl font-bold text-white">
              CH<span className="text-orange-400">POS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 hover:text-orange-400 hover:bg-orange-500/10 ${
                  pathname === item.href
                    ? 'text-orange-400 bg-orange-500/10'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {isSignedIn ? (
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Link
                  href="/download"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg flex items-center gap-2"
                >
                  Download App
                </Link>
                <Link
                  href="/dashboard"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        'w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-orange-400/50 hover:border-orange-400 transition-colors',
                    },
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center space-x-3 lg:space-x-4">
                <Link
                  href="/download"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg flex items-center gap-2"
                >
                  Download App
                </Link>
                <SignInButton mode="modal">
                  <button className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200 px-2 py-1">
                    Sign In
                  </button>
                </SignInButton>
                <Link
                  href="/sign-up"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 lg:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800/50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-lg rounded-lg mt-2 border border-gray-800/50 mx-2 sm:mx-0">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-orange-400 hover:bg-gray-800/50 rounded-md ${
                    pathname === item.href
                      ? 'text-orange-400 bg-gray-800/50'
                      : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-2 space-y-3">
                {isSignedIn ? (
                  <div className="space-y-3">
                    <Link
                      href="/download"
                      className="block w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-medium text-center text-sm transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Download App
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-medium text-center text-sm transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <div className="flex justify-center pt-2">
                      <UserButton />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      href="/download"
                      className="block w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-medium text-center text-sm transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Download App
                    </Link>
                    <SignInButton mode="modal">
                      <button className="block w-full text-gray-300 hover:text-white font-medium py-3 text-center text-sm transition-colors duration-200">
                        Sign In
                      </button>
                    </SignInButton>
                    <Link
                      href="/sign-up"
                      className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-medium text-center text-sm transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
