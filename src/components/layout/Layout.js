import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';
import Cursor from '../common/Cursor';

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      
      {/* Custom Cursor */}
      <Cursor />
    </div>
  );
};

export default Layout;
