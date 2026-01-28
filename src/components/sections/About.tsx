import React, { useEffect, useState } from 'react';
import { Download, GraduationCap, Code, Target, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useResume } from '../../contexts/ResumeContext';
import profileImage from '../../assets/images/profile.webp';
import LazyImage from '../common/LazyImage';
import { RevealOnScroll } from '../common/RevealOnScroll';
import AboutCard from '../common/AboutCard';

interface GithubStats {
  public_repos: number;
}

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
        // Silent fallback - use default values if API fails
        setStats({ public_repos: 0 });
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  const cards = React.useMemo(() => [
    { 
      icon: <Code className="w-6 h-6 text-accent-blue" />, 
      title: "Repositórios", 
      subtitle: loading ? "Carregando..." : `${stats.public_repos}+ Projetos Públicos`,
    },
    { 
      // Trocado de Comunidade para Foco
      icon: <Target className="w-6 h-6 text-accent-purple" />, 
      title: "Foco Principal", 
      subtitle: "Engenharia de Dados & BI",
    },
    { 
      icon: <GraduationCap className="w-6 h-6 text-accent-cyan" />, 
      title: "Formação", 
      subtitle: "Eng. Elétrica (IFMA)",
    }
  ], [loading, stats.public_repos]);

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <RevealOnScroll width="100%">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-gray-900 dark:text-white">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center md:justify-center lg:justify-start lg:pl-12 relative">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan opacity-20 blur-[32px] animate-pulse"></div>
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-gray-200 to-white dark:from-gray-800 dark:to-black shadow-2xl overflow-hidden relative z-10">
                  <LazyImage src={profileImage} alt="Euller Duarte" className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {cards.map((card, idx) => (
                  <AboutCard 
                    key={idx}
                    icon={card.icon}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
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
                <a href="https://github.com/Euuuller" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center gap-2">
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
export default React.memo(About);