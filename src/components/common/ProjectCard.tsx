import React from 'react';
import { Project } from '../../types';
import { Github, BarChart, TrendingUp, ShieldCheck, MessageSquare, Truck, ExternalLink, Maximize2 } from 'lucide-react';
import LazyImage from './LazyImage';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
  onOpenDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible, onOpenDetails }) => {
  return (
    <article 
      className={`project-card glass-card rounded-2xl overflow-hidden group bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 flex flex-col h-full cursor-pointer ${
        isVisible ? `animate-fade-in-up animate-stagger-${Math.min(index + 2, 6)}` : 'opacity-0'
      }`}
      onClick={() => onOpenDetails(project)}
    >
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <LazyImage 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        
        {/* Overlay with Buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
          <button 
            onClick={(e) => { e.stopPropagation(); onOpenDetails(project); }}
            title="Ver Detalhes do Projeto"
            className="p-3 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-colors transform hover:scale-110 duration-200"
          >
            <Maximize2 className="w-6 h-6" />
          </button>

          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              title="Ver Código"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white text-black rounded-full hover:bg-gray-800 hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
          )}

          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              title="Ver Demo Ao Vivo"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white text-black rounded-full hover:bg-accent-purple hover:text-white transition-colors transform hover:scale-110 duration-200"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white rounded-full border border-gray-200 dark:border-white/10 shadow-sm">
            {project.category === 'ml' ? 'Machine Learning' : project.category === 'viz' ? 'Dashboards' : 'Analytics'}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow items-center text-center">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-accent-blue transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5">{t}</span>
          ))}
        </div>
        {project.metrics && (
          <div className="pt-6 border-t border-gray-100 dark:border-white/5 flex justify-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mt-auto w-full">
            {project.metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-2">
                 {i === 0 ? (
                    project.title.includes('Fraudes') ? <ShieldCheck className="w-4 h-4 text-accent-blue" /> :
                    project.title.includes('Sentimento') ? <MessageSquare className="w-4 h-4 text-accent-blue" /> :
                    project.title.includes('Logística') ? <Truck className="w-4 h-4 text-accent-blue" /> :
                    <BarChart className="w-4 h-4 text-accent-blue" />
                 ) : (
                    <TrendingUp className="w-4 h-4 text-green-500" />
                 )}
                {m}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
