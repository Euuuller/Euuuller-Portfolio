import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import { NavItem } from '../types';
import { useTheme } from '../ThemeContext';
import { useResume } from '../ResumeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { throttle } from '../utils/performance';
import Logo from './Logo';

const navItems: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
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

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-accent-blue/10 group-hover:bg-accent-blue/20 transition-colors">
              <Logo className="w-8 h-8" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Euller<span className="text-accent-blue">.AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-white transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full" />
              </a>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={openResume} className="px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-white dark:text-black rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Ver Currículo
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="text-gray-900 dark:text-gray-300 hover:text-accent-blue dark:hover:text-white transition-colors" 
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-black text-white flex flex-col md:hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-2xl font-bold text-amber-500 tracking-tight">Euuuller</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 border border-white/20 rounded-lg hover:bg-white/10 transition-colors group"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-8 space-y-8">
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.label} 
                  href={item.href} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-medium text-white hover:text-amber-500 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* Footer / Socials */}
            <div className="relative z-10 p-8 border-t border-white/10">
              <div className="flex items-center justify-center gap-6">
                <a href="https://github.com/Euuuller" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:scale-110 hover:border-amber-500 hover:text-amber-500 transition-all text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://medium.com/@euller.santos.duarte" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:scale-110 hover:border-amber-500 hover:text-amber-500 transition-all text-white">
                  <BookOpen className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/euuuller" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:scale-110 hover:border-amber-500 hover:text-amber-500 transition-all text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:euller.santos.duarte@gmail.com" className="p-3 border border-white/20 rounded-full hover:bg-white/10 hover:scale-110 hover:border-amber-500 hover:text-amber-500 transition-all text-white">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;