import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebarCollapse = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen gradient-animation overflow-hidden">
      {/* Enhanced floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-emerald-300 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-300 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-35 animate-ping"></div>
      </div>

      {/* Header */}
      <Header
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        toggleSidebarCollapse={toggleSidebarCollapse}
        isSidebarCollapsed={isSidebarCollapsed}
      />

      <div className="flex h-screen pt-14">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
          isCollapsed={isSidebarCollapsed}
        />

        {/* Main Content Area with dynamic margin */}
        <main
          className={`flex-1 relative overflow-hidden transition-all duration-500 ${
            isSidebarCollapsed ? 'lg:ml-0' : 'lg:ml-0'
          }`}
        >
          {/* Content with enhanced glass effect overlay */}
          <div className="h-full relative">
            {/* Enhanced glass morphism overlay */}
            <div className="absolute inset-0 glass-dark opacity-20 pointer-events-none"></div>

            {/* Scrollable Content */}
            <div className="relative z-10 h-full overflow-y-auto custom-scrollbar">
              <div className="min-h-full">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Enhanced decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
        {/* Top gradient orb with animation */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>

        {/* Bottom right gradient orb with slow rotation */}
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-radial from-emerald-500/20 to-transparent rounded-full blur-3xl animate-slow-spin"></div>

        {/* Center floating orb with gentle movement */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-yellow-500/10 to-transparent rounded-full blur-3xl opacity-50 animate-float"></div>

        {/* Animated side orbs */}
        <div className="absolute top-1/4 -left-20 w-48 h-48 bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-2xl animate-ping-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-56 h-56 bg-gradient-radial from-orange-500/15 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Additional smaller orbs for richness */}
        <div className="absolute top-20 right-1/3 w-32 h-32 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-radial from-indigo-500/12 to-transparent rounded-full blur-2xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default Layout;
