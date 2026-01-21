import React, { useEffect, useState } from 'react';
import { Download, GraduationCap, Code, Github, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useResume } from '../ResumeContext';
import profileImage from '../assets/images/profile.webp'; // Updated to WebP
import LazyImage from './LazyImage';

interface GithubStats {
  public_repos: number;
}

// Componente visual para simular o gráfico de contribuição (Estética Data Viz)
const CommitGraph: React.FC = () => {
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
};

const About: React.FC = () => {
  const { openResume } = useResume();
  const [stats, setStats] = useState<GithubStats>({ public_repos: 0 });
  const [loading, setLoading] = useState(true);

  // Fetch real data from GitHub API (Apenas Repositórios agora)
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Euuuller');
        const data = await response.json();
        if (data) {
          setStats({
            public_repos: data.public_repos
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const cards = [
    { 
      icon: <Code className="w-6 h-6 text-accent-blue" />, 
      title: "Repositórios", 
      subtitle: loading ? "Carregando..." : `${stats.public_repos}+ Projetos Públicos`,
      isDynamic: true
    },
    { 
      // Trocado de Comunidade para Foco
      icon: <Target className="w-6 h-6 text-accent-purple" />, 
      title: "Foco Principal", 
      subtitle: "Engenharia de Dados & BI",
      isDynamic: false
    },
    { 
      icon: <GraduationCap className="w-6 h-6 text-accent-cyan" />, 
      title: "Formação", 
      subtitle: "Eng. Elétrica (IFMA)",
      isDynamic: false
    }
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-display font-bold mb-16 text-gray-900 dark:text-white">
            Sobre <span className="text-gradient">Mim</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center md:justify-center lg:justify-start lg:pl-12 relative">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan opacity-20 blur-xl animate-pulse"></div>
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-gray-200 to-white dark:from-gray-800 dark:to-black shadow-2xl overflow-hidden relative z-10">
                  <LazyImage src={profileImage} alt="Euller Duarte" className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700" />
                  
                  {/* Adicionado o Gráfico de Commits Animado aqui */}
                  <CommitGraph />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {cards.map((card, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-blue/50 transition-colors duration-300 group shadow-sm hover:shadow-md">
                    <div className="mb-3 p-2 rounded-lg bg-gray-50 dark:bg-white/5 group-hover:bg-white/10 transition-colors duration-300">{card.icon}</div>
                    <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{card.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{card.subtitle}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                <p>Sou graduando em <strong className="text-gray-900 dark:text-white">Engenharia Elétrica pelo Instituto Federal do Maranhão (IFMA)</strong>, transformando dados brutos em inteligência de negócio.</p>
                <p>Ao contrário da análise tradicional, utilizo engenharia de software para criar soluções escaláveis. Meu foco está na intersecção entre <span className="text-accent-blue font-medium">Data Science</span> e <span className="text-accent-purple font-medium">Desenvolvimento</span>, aplicando Python e SQL para análises Preditivas e Prescritivas.</p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button onClick={openResume} className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-accent-blue dark:hover:bg-gray-200 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Download className="w-5 h-5" />
                  Baixar Currículo
                </button>
                <a href="https://github.com/Euuuller" target="_blank" className="px-8 py-3 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  Ver GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;