import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import excelIcon from '../assets/icons/excel.svg';
import seabornIcon from '../assets/icons/seaborn.svg';

type Category = 'languages_db' | 'visualization' | 'ml_stats' | 'software_eng';

interface Skill {
  name: string;
  icon: string;
  description: string;
  category: Category;
}

const skills: Skill[] = [
  // Linguagens & BDs
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Linguagem principal para Data Science, Machine Learning e automação.',
    category: 'languages_db'
  },
  {
    name: 'SQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    description: 'Consultas complexas, otimização e manipulação de bancos de dados.',
    category: 'languages_db'
  },
  {
    name: 'R',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    description: 'Análise estatística avançada e visualização de dados.',
    category: 'languages_db'
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Desenvolvimento web e interatividade em dashboards.',
    category: 'languages_db'
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Estruturação semântica para web e relatórios.',
    category: 'languages_db'
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    description: 'Estilização de interfaces e layouts responsivos.',
    category: 'languages_db'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    description: 'Banco de dados relacional robusto para grandes volumes de dados.',
    category: 'languages_db'
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    description: 'Banco de dados NoSQL orientado a documentos para big data.',
    category: 'languages_db'
  },
  {
    name: 'SQLite',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    description: 'Banco de dados leve e embutido para aplicações locais.',
    category: 'languages_db'
  },

  // Visualização
  {
    name: 'Power BI',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    description: 'Criação de dashboards interativos e storytelling de dados.',
    category: 'visualization'
  },
  {
    name: 'Excel',
    icon: excelIcon,
    description: 'Análise exploratória, tabelas dinâmicas e automação.',
    category: 'visualization'
  },
  {
    name: 'Tableau',
    icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg',
    description: 'Visualização de dados avançada e business intelligence.',
    category: 'visualization'
  },
  {
    name: 'Matplotlib',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg',
    description: 'Biblioteca fundamental para plotagem de gráficos em Python.',
    category: 'visualization'
  },
  {
    name: 'Seaborn',
    icon: seabornIcon,
    description: 'Visualização de dados estatísticos atraentes e informativos.',
    category: 'visualization'
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    description: 'Prototipagem de UI e Design de Dashboards.',
    category: 'visualization'
  },

  // ML & Estatística
  {
    name: 'Pandas',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    description: 'Manipulação e análise de dados estruturados de alta performance.',
    category: 'ml_stats'
  },
  {
    name: 'NumPy',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    description: 'Computação numérica e operações matriciais eficientes.',
    category: 'ml_stats'
  },
  {
    name: 'Scikit-learn',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    description: 'Algoritmos de machine learning para classificação e regressão.',
    category: 'ml_stats'
  },
  {
    name: 'TensorFlow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    description: 'Framework open-source para deep learning e redes neurais.',
    category: 'ml_stats'
  },

  // Engenharia de Software
  {
    name: 'Jupyter',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    description: 'Ambiente interativo para desenvolvimento e documentação.',
    category: 'software_eng'
  },
  {
    name: 'VS Code',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    description: 'Editor de código poderoso para desenvolvimento ágil.',
    category: 'software_eng'
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: 'Controle de versão distribuído para colaboração.',
    category: 'software_eng'
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    description: 'Containerização para padronização de ambientes.',
    category: 'software_eng'
  }
];

const tabs = [
  { id: 'languages_db', label: 'Linguagens & BDs' },
  { id: 'visualization', label: 'Visualização & Design' },
  { id: 'ml_stats', label: 'ML & Estatística' },
  { id: 'software_eng', label: 'Engenharia de Software' },
];

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('languages_db');

  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="habilidades" className="py-32 relative">
       {/* Central Glow - retained for focus */}
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Habilidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Técnicas</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Stack tecnológica otimizada para análise de dados e desenvolvimento de soluções escaláveis.
          </p>
        </div>

        {/* Animated Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-white/50 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 w-fit mx-auto backdrop-blur-xl">
          {tabs.map((tab) => (
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

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.1 } }}
                transition={{ duration: 0.2 }}
                // Updated styles to match Contact section cards
                className="group relative glass-card p-6 md:p-8 rounded-2xl border border-gray-200 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 flex flex-col items-center text-center backdrop-blur-sm"
              >
                {/* Icon Container matching Contact style */}
                <div className="w-16 h-16 mb-6 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain relative z-10" 
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white transition-colors z-10 relative">
                  {skill.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed z-10 relative">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;