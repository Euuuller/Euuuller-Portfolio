import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { NavItem } from '../../types';
import { useTheme } from '../../contexts/ThemeContext';
import { useResume } from '../../contexts/ResumeContext';
import { throttle } from '../../utils/performance';

const navItems: NavItem[] = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openResume } = useResume();

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 50);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-black/95 backdrop-blur-sm shadow-sm py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo - Simplified */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-accent-blue transition-colors"
          >
            ED
          </a>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent-blue dark:hover:text-accent-blue transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            
            {/* Actions */}
            <button
              onClick={openResume}
              className="ml-2 px-4 py-2 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-accent-blue dark:hover:bg-accent-blue dark:hover:text-white transition-all"
            >
              CV
            </button>
            
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Minimal Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-[60px] right-0 bottom-0 w-64 bg-white dark:bg-black border-l border-gray-200 dark:border-white/10 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="px-4 py-3 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
              <button
                onClick={() => {
                  openResume();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3 text-base font-medium bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg hover:bg-accent-blue dark:hover:bg-accent-blue dark:hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Baixar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);