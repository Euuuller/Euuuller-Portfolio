import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Target, Lightbulb, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-[#0F0F0F] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-gray-200 dark:border-white/10"
            >
              {/* Header Image */}
              <div className="relative h-48 sm:h-64 md:h-80 flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block px-3 py-1 bg-accent-blue text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                      {project.category === 'ml' ? 'Machine Learning' : project.category === 'viz' ? 'Dashboard' : 'Analytics'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h2>
                  </motion.div>
                </div>
                
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-2 space-y-8">
                    
                    {/* Descrição Geral */}
                    <div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Problem / Solution / Impact Grid */}
                    {project.details && (
                      <div className="space-y-6">
                        <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl border border-red-100 dark:border-red-500/20">
                          <div className="flex items-start gap-3">
                            <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-red-400 mb-2">O Desafio</h3>
                              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {project.details.problem}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl border border-blue-100 dark:border-blue-500/20">
                          <div className="flex items-start gap-3">
                            <Lightbulb className="w-6 h-6 text-accent-blue mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-blue-400 mb-2">A Solução</h3>
                              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {project.details.solution}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/10 p-5 rounded-xl border border-green-100 dark:border-green-500/20">
                          <div className="flex items-start gap-3">
                            <TrendingUp className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 dark:text-green-400 mb-2">Impacto & Resultados</h3>
                              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                                {project.details.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Metadata & Tech */}
                  <div className="lg:col-span-1 space-y-8">
                    
                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          className="w-full py-3 px-4 bg-accent-blue hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                        >
                          Ver Demo Online
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          className="w-full py-3 px-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          Ver Código Fonte
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Tecnologias</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1.5 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md border border-gray-200 dark:border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics/Stats (Recycled from card) */}
                    {project.metrics && (
                      <div>
                         <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Métricas Chave</h4>
                         <ul className="space-y-3">
                           {project.metrics.map((m, i) => (
                             <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                               <div className="w-2 h-2 rounded-full bg-accent-purple" />
                               <span className="font-medium">{m}</span>
                             </li>
                           ))}
                         </ul>
                      </div>
                    )}
                    
                  </div>
                </div>
              </div>
              
              {/* Footer CTA (Mobile Only usually, kept here for layout balance) */}
              <div className="p-4 border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                <span>Projeto desenvolvido por Euller Duarte</span>
                <div className="flex items-center gap-1">
                  <span>2024</span>
                  <Calendar className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;