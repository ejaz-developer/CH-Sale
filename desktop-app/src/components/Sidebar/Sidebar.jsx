import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiShoppingCart,
  FiPackage,
  FiBarChart,
  FiUsers,
  FiSettings,
  FiTrendingUp,
  FiCreditCard,
  FiClipboard,
  FiStar,
  FiZap,
} from 'react-icons/fi';

const Sidebar = ({ isOpen, closeSidebar, isCollapsed }) => {
  const location = useLocation();

  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: FiHome,
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'cyan',
    },
    {
      path: '/sales',
      name: 'Sales',
      icon: FiShoppingCart,
      gradient: 'from-emerald-500 to-teal-500',
      glow: 'emerald',
    },
    {
      path: '/products',
      name: 'Products',
      icon: FiPackage,
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'yellow',
    },
    {
      path: '/inventory',
      name: 'Inventory',
      icon: FiClipboard,
      gradient: 'from-purple-500 to-indigo-500',
      glow: 'purple',
    },
    {
      path: '/customers',
      name: 'Customers',
      icon: FiUsers,
      gradient: 'from-pink-500 to-rose-500',
      glow: 'pink',
    },
    {
      path: '/reports',
      name: 'Reports',
      icon: FiBarChart,
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'blue',
    },
    {
      path: '/transactions',
      name: 'Transactions',
      icon: FiCreditCard,
      gradient: 'from-green-500 to-emerald-500',
      glow: 'green',
    },
    {
      path: '/analytics',
      name: 'Analytics',
      icon: FiTrendingUp,
      gradient: 'from-orange-500 to-red-500',
      glow: 'orange',
    },
  ];

  const bottomMenuItems = [
    {
      path: '/settings',
      name: 'Settings',
      icon: FiSettings,
      gradient: 'from-gray-500 to-slate-500',
      glow: 'gray',
    },
  ];

  const renderMenuItem = (item, index) => {
    const Icon = item.icon;
    const isActive = location.pathname === item.path;

    return (
      <NavLink
        key={index}
        to={item.path}
        onClick={closeSidebar}
        className={`group relative flex items-center ${
          isCollapsed ? 'justify-center px-2 py-3' : 'px-3 py-3 mx-2'
        } rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
            : 'text-white/60 hover:text-white hover:bg-white/5'
        }`}
        title={isCollapsed ? item.name : ''}
      >
        <div className={`relative flex items-center ${isCollapsed ? '' : 'w-full'}`}>
          <Icon
            className={`text-base ${isCollapsed ? '' : 'mr-3'} transition-all duration-200 ${
              isActive ? 'text-cyan-400' : 'text-white/60 group-hover:text-white'
            }`}
          />

          {!isCollapsed && <span className="font-medium text-sm">{item.name}</span>}
        </div>

        {/* Tooltip for collapsed state */}
        {isCollapsed && (
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
            {item.name}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1 w-1 h-1 bg-gray-900 rotate-45"></div>
          </div>
        )}
      </NavLink>
    );
  };

  return (
    <>
      {/* Mobile Overlay with enhanced blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar with clean glass effect and smaller width */}
      <div
        className={`
        fixed left-0 top-0 h-full glass-dark backdrop-blur-2xl border-r border-white/10 z-50 transform transition-all duration-300 ease-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'w-16' : 'w-56'}
      `}
      >
        {/* Sidebar Header with clean styling */}
        <div
          className={`relative ${
            isCollapsed ? 'p-3' : 'p-4'
          } border-b border-white/10 overflow-hidden transition-all duration-300`}
        >
          <div
            className={`relative flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'}`}
          >
            {/* Clean logo */}
            <div
              className={`${
                isCollapsed ? 'w-8 h-8' : 'w-10 h-10'
              } bg-gradient-to-br from-cyan-500 via-emerald-500 to-teal-600 rounded-xl flex items-center justify-center transition-all duration-300`}
            >
              <span className={`text-white font-bold ${isCollapsed ? 'text-sm' : 'text-base'}`}>
                ₽
              </span>
            </div>

            {!isCollapsed && (
              <div>
                <h2 className="text-white font-semibold text-lg">POS System</h2>
                <p className="text-cyan-300 text-xs">Skardu Elite</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu with compact spacing */}
        <div className="flex flex-col h-full custom-scrollbar">
          <nav className={`flex-1 ${isCollapsed ? 'py-3 px-1' : 'py-4 px-1'}`}>
            <div className="space-y-1">
              {menuItems.map((item, index) => renderMenuItem(item, index))}
            </div>
          </nav>

          {/* Bottom Menu */}
          <div className={`border-t border-white/10 ${isCollapsed ? 'p-3' : 'p-4'}`}>
            <div className="space-y-1">
              {bottomMenuItems.map((item, index) => renderMenuItem(item, index))}
            </div>
          </div>

          {/* Compact Footer */}
          {!isCollapsed && (
            <div className="p-3 border-t border-white/10 bg-black/10">
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <p className="text-xs text-green-300 font-medium">Online</p>
                </div>
                <p className="text-xs text-white/40">POS v2.0</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
