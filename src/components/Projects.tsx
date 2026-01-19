import React, { useState } from 'react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, BarChart, TrendingUp, ShieldCheck, MessageSquare, Truck, ExternalLink, Maximize2 } from 'lucide-react';
import ProjectModal from './ProjectModal';

const projects: Project[] = [
  {
    id: '1',
    title: 'Segmentação de Clientes (RFM)',
    description: 'Análise de Clusterização para classificar clientes com base em Recência, Frequência e Valor Monetário.',
    category: 'analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'Pandas', 'Power BI'],
    metrics: ['1.5k Registros', '5 Segmentos'],
    link: 'https://github.com/Euuuller/rfm-analysis',
    demoUrl: '#',
    details: {
      problem: "A equipe de marketing realizava campanhas genéricas para toda a base de clientes, resultando em baixo engajamento e alto custo de aquisição (CAC). Faltava clareza sobre quais clientes eram VIPs, quais estavam em risco de churn e quais eram novos.",
      solution: "Desenvolvi um algoritmo de clusterização (K-Means) utilizando a metodologia RFM (Recência, Frequência, Monetário). O processo envolveu limpeza de dados com Pandas, normalização e aplicação do modelo. Os resultados foram exportados para um dashboard no Power BI para visualização estratégica.",
      impact: "Identificação de 5 clusters distintos. A segmentação permitiu campanhas personalizadas que aumentaram a taxa de conversão em 15% e recuperaram 8% dos clientes inativos no primeiro mês."
    }
  },
  {
    id: '2',
    title: 'Dashboard de Vendas',
    description: 'Dashboard interativo para monitoramento de KPIs de vendas, análise geográfica e tendências mensais.',
    category: 'viz',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    tech: ['Power BI', 'DAX', 'SQL'],
    metrics: ['KPIs em Tempo Real'],
    link: '#',
    demoUrl: '#',
    details: {
      problem: "Os gerentes regionais dependiam de planilhas Excel estáticas e manuais para acompanhar as vendas, gerando atrasos de até 3 dias na tomada de decisão e inconsistência nos números apresentados.",
      solution: "Construção de um Data Warehouse simplificado e conexão direta com o Power BI. Utilizei DAX avançado para cálculos de Time Intelligence (YoY, MoM) e modelagem Star Schema para performance.",
      impact: "Redução de 100% no tempo de consolidação de relatórios. A diretoria agora possui visão em tempo real do faturamento por região, produto e vendedor, permitindo ajustes de estratégia imediatos."
    }
  },
  {
    id: '3',
    title: 'Previsão de Demanda',
    description: 'Modelo de Séries Temporais para prever a demanda futura de produtos, otimizando estoque.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'Prophet', 'Scikit-learn'],
    metrics: ['MAPE 12%', 'Forecasting 30 dias'],
    link: '#',
    details: {
      problem: "A empresa enfrentava constantes rupturas de estoque em produtos de alta rotatividade e excesso de estoque em produtos sazonais, impactando o fluxo de caixa e a satisfação do cliente.",
      solution: "Implementação de um modelo preditivo utilizando a biblioteca Prophet do Facebook, ideal para séries temporais com forte sazonalidade. O modelo considera feriados e tendências de crescimento.",
      impact: "Acurácia de 88% (MAPE de 12%) nas previsões de 30 dias. O projeto auxiliou na redução de 20% no custo de estoque parado e diminuiu significativamente as rupturas."
    }
  },
   {
    id: '4',
    title: 'Análise Exploratória de Logística',
    description: 'Análise detalhada de rotas de entrega e tempos de trânsito para identificar gargalos.',
    category: 'analytics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'Matplotlib', 'Seaborn'],
    metrics: ['Otimização de 15%'],
    link: '#',
    details: {
      problem: "Custos logísticos elevados e reclamações sobre atrasos nas entregas em regiões específicas, sem clareza sobre a causa raiz (se era a transportadora, a rota ou o centro de distribuição).",
      solution: "EDA (Análise Exploratória de Dados) profunda utilizando Python. Mapeamento de geolocalização das entregas e correlação entre tempo de trânsito e transportadoras.",
      impact: "Identificação de gargalos em 2 rotas críticas. A renegociação com transportadoras baseada nos dados gerou uma economia projetada de 15% nos custos de frete."
    }
  },
  {
    id: '5',
    title: 'Detecção de Fraudes',
    description: 'Modelo de classificação robusto utilizando XGBoost para identificar transações fraudulentas.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'XGBoost', 'SQL'],
    metrics: ['99.8% Acurácia', 'Real-time'],
    link: '#',
    demoUrl: '#',
    details: {
      problem: "O sistema de regras manuais deixava passar muitas fraudes sutis em transações de cartão de crédito, gerando prejuízos financeiros e chargebacks.",
      solution: "Treinamento de um modelo de Machine Learning supervisionado (XGBoost) com dados históricos balanceados (SMOTE). O modelo avalia centenas de features em milissegundos.",
      impact: "O modelo atingiu 99.8% de acurácia com baixo índice de falsos positivos. Estima-se que o bloqueio preventivo de fraudes economize milhares de reais mensalmente."
    }
  },
  {
    id: '6',
    title: 'Análise de Sentimento (NLP)',
    description: 'Processamento de Linguagem Natural para classificar avaliações de clientes em e-commerce.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'TensorFlow', 'NLTK'],
    metrics: ['50k Reviews', 'Bert Model'],
    link: '#',
    details: {
      problem: "Ler manualmente milhares de avaliações de clientes para entender a percepção da marca era inviável, tornando a resposta a crises lenta e ineficaz.",
      solution: "Utilização de NLP (Processamento de Linguagem Natural) com NLTK e TensorFlow para classificar comentários automaticamente em Positivo, Negativo ou Neutro.",
      impact: "Processamento automático de 50k reviews. Criação de um índice de satisfação diário que alerta a equipe de suporte sobre picos de reclamações em tempo real."
    }
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Clear after animation
  };

  return (
    <section id="projetos" className="py-32 max-w-7xl mx-auto px-6 relative">
      <div className="flex flex-col items-center justify-center text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Projetos <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Cases reais de aplicação de dados transformando problemas complexos em soluções visuais e preditivas.
          </p>
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {projects.map((project) => (
            <motion.article 
              layout 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.3 }} 
              key={project.id} 
              className="glass-card rounded-2xl overflow-hidden group hover:border-accent-blue/30 transition-all duration-300 bg-white dark:bg-[#0A0A0A] border-gray-200 dark:border-white/5 flex flex-col h-full cursor-pointer"
              onClick={() => openProjectDetails(project)}
            >
              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
                {/* Overlay with Buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  {/* View Details Button */}
                  <button 
                    onClick={(e) => { e.stopPropagation(); openProjectDetails(project); }}
                    title="Ver Detalhes do Projeto"
                    className="p-3 bg-white text-black rounded-full hover:bg-accent-blue hover:text-white transition-colors transform hover:scale-110 duration-200"
                  >
                    <Maximize2 className="w-6 h-6" />
                  </button>

                  {/* GitHub Button */}
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

                  {/* Demo Button */}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
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
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeProjectDetails} 
      />
    </section>
  );
};
export default Projects;