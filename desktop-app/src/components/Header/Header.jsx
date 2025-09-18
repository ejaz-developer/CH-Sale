import React from 'react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { FiMenu, FiBell, FiSettings, FiSearch, FiMoon, FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar, isSidebarOpen, toggleSidebarCollapse, isSidebarCollapsed }) => {
  const navigate = useNavigate();

  const handleAddSale = () => {
    navigate('/sales');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/10 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-2 h-14">
        {/* Left Section - Menu and Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 lg:hidden hover-scale"
          >
            <FiMenu className="text-lg" />
          </button>

          {/* Desktop sidebar collapse toggle */}
          <button
            onClick={toggleSidebarCollapse}
            className="hidden lg:block p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover-scale"
          >
            <FiMenu className="text-lg" />
          </button>

          <div className="flex items-center space-x-3">
            {/* Compact logo with gradient and glow */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-sm text-glow">₽</span>
              </div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white text-glow">POS System</h1>
              <p className="text-xs text-cyan-300 font-medium">Skardu Elite</p>
            </div>
          </div>
        </div>

        {/* Center - Search Bar and Add Sale Button */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
            <input
              type="text"
              placeholder="Search products, customers..."
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm text-sm"
            />
          </div>

          {/* Add Sale Button */}
          <button
            onClick={handleAddSale}
            className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-emerald-500/20 flex items-center space-x-2"
          >
            <FiPlus className="text-lg" />
            <span>Add Sale</span>
          </button>
        </div>

        {/* Right Section - Actions and User */}
        <div className="flex items-center space-x-2">
          {/* Mobile Add Sale Button */}
          <button
            onClick={handleAddSale}
            className="md:hidden bg-emerald-500/10 border border-emerald-400/30 text-emerald-400 p-2 rounded-lg transition-all duration-200 hover:bg-emerald-500/20"
          >
            <FiPlus className="text-lg" />
          </button>

          {/* Theme toggle */}
          <button className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover-scale">
            <FiMoon className="text-lg" />
          </button>

          {/* Notifications with badge */}
          <button className="relative p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover-scale group">
            <FiBell className="text-lg" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">3</span>
            </span>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-75"></div>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover-scale">
            <FiSettings className="text-lg" />
          </button>

          {/* Authentication Section */}
          <div className="flex items-center space-x-3 pl-3 border-l border-white/20">
            <SignedOut>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => navigate('/sign-in')}
                  className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-cyan-500/20"
                >
                  <span className="text-sm">Sign In</span>
                </button>
                <button
                  onClick={() => navigate('/sign-up')}
                  className="bg-purple-500/10 border border-purple-400/30 text-purple-400 px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:bg-purple-500/20"
                >
                  <span className="text-sm">Sign Up</span>
                </button>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center space-x-3">
                <div className="hidden lg:block text-right">
                  <p className="text-sm font-semibold text-white">Welcome!</p>
                  <p className="text-xs text-cyan-300">Productive day</p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full blur opacity-75 animate-pulse"></div>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox:
                          'relative w-10 h-10 ring-2 ring-cyan-400 ring-offset-2 ring-offset-transparent',
                        userButtonPopoverCard: 'glass-dark border border-white/20 text-white',
                        userButtonPopoverActions: 'border-t border-white/20',
                      },
                    }}
                  />
                </div>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
