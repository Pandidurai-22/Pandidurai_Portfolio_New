import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useCursor } from '../../context/CursorContext';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FiGithub className="w-5 h-5" />,
    url: 'https://github.com/Pandidurai-22',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/pandidurai-s-6a30b8212/',
  },
  {
    name: 'Email',
    icon: <FiMail className="w-5 h-5" />,
    url: 'pandidurai32127@gmail.com',
  },
];

const Footer = () => {
  const { theme } = useTheme();
  const { onCursor } = useCursor();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            >
              Pandi Durai S
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label={social.name}
                onMouseEnter={() => onCursor('hover')}
                onMouseLeave={() => onCursor('default')}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Pandi Durai. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              to="/privacy"
              className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              onMouseEnter={() => onCursor('hover')}
              onMouseLeave={() => onCursor('default')}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
