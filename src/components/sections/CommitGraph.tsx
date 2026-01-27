import React from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const CommitGraph: React.FC = React.memo(() => {
  // Gera níveis de atividade aleatórios para simular um histórico
  const weeks = 14;
  const days = 7;
  
  return (
    <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-12 z-20 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Activity Log</span>
        <Github className="w-3 h-3 text-gray-400" />
      </div>
      <div className="flex gap-[2px]">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[2px]">
            {Array.from({ length: days }).map((_, d) => {
              // Simulação de "intensidade" do commit
              const intensity = Math.random();
              let colorClass = 'bg-gray-200 dark:bg-white/5'; // Empty
              
              if (intensity > 0.85) colorClass = 'bg-accent-blue'; // High
              else if (intensity > 0.6) colorClass = 'bg-accent-purple'; // Medium
              else if (intensity > 0.4) colorClass = 'bg-accent-cyan/60'; // Low
              
              return (
                <motion.div
                  key={`${w}-${d}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (w * 0.1) + (d * 0.05) }}
                  className={`w-2 h-2 rounded-[1px] ${colorClass}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
});

export default CommitGraph;
