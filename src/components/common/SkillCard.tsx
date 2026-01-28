import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../constants/skills';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
      transition={{ duration: 0.2 }}
      className="group relative glass-card p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm"
    >
      <div className="w-16 h-16 mb-6 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10" 
          loading="lazy"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors z-10 relative">
        {skill.name}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed z-10 relative">
        {skill.description}
      </p>
    </motion.div>
  );
};

export default React.memo(SkillCard);
