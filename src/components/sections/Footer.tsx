import React from 'react';
import { ArrowUp, Heart, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-white/5 transition-colors duration-300 relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Euller dos Santos Rodrigues Duarte. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-500 text-sm">
            <span>Feito com muito amor</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>e café</span>
            <Coffee className="w-4 h-4 text-amber-600" />
          </div>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="p-2 bg-white dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors shadow-sm dark:shadow-none"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default React.memo(Footer);