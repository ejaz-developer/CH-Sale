import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
