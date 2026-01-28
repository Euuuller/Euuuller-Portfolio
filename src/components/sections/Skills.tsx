import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { skills, skillTabs, Category } from '../../constants/skills';
import SkillCard from '../common/SkillCard';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('languages_db');

  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="habilidades" className="py-32 relative">
       {/* Central Glow - Optimized for mobile */}
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] md:h-[500px] bg-accent-blue/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50 md:opacity-100" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll width="100%">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Habilidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Técnicas</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Stack tecnológica otimizada para análise de dados e desenvolvimento de soluções escaláveis.
            </p>
          </div>
        </RevealOnScroll>

        {/* Animated Tabs */}
        <RevealOnScroll width="100%" delay={0.4}>
          <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-white/50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 w-fit mx-auto backdrop-blur-xl">
            {skillTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Category)}
                className={`relative px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-accent-blue ${
                  activeTab === tab.id 
                    ? 'text-white' 
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent-blue rounded-xl shadow-lg shadow-blue-500/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
