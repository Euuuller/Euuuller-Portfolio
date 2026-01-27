import React, { useState } from 'react';
import { Project } from '../../types';
import { Github, BarChart, TrendingUp, ShieldCheck, MessageSquare, Truck, ExternalLink, Maximize2 } from 'lucide-react';
import ProjectModal from '../common/ProjectModal';
import LazyImage from '../common/LazyImage';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

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
    title: 'Detecção de Fraudes (ML)',
    description: 'Modelo de Machine Learning para identificar transações fraudulentas em tempo real.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'Scikit-Learn', 'XGBoost'],
    metrics: ['95% Precisão', '2% Falsos Positivos'],
    link: 'https://github.com/Euuuller/fraud-detection',
    demoUrl: '#',
    details: {
      problem: "A empresa financeira enfrentava perdas de R$ 200k/mês com fraudes em cartões de crédito. O sistema de regras manuais bloqueava apenas 60% das fraudes e gerava 15% de falsos positivos, prejudicando a experiência do cliente.",
      solution: "Treinei um modelo XGBoost com 500k transações históricas, utilizando feature engineering para criar variáveis como 'velocidade de transações' e 'padrão geográfico'. Implementei SMOTE para balancear as classes e otimizei os hiperparâmetros via GridSearch.",
      impact: "Redução de 80% nas perdas por fraude. O modelo alcançou 95% de precisão e apenas 2% de falsos positivos, melhorando significativamente a satisfação dos clientes legítimos."
    }
  },
  {
    id: '4',
    title: 'Análise de Sentimento (NLP)',
    description: 'Processamento de linguagem natural para análise de sentimentos em reviews de produtos.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'NLTK', 'TensorFlow'],
    metrics: ['10k Reviews', '88% Acurácia'],
    link: 'https://github.com/Euuuller/sentiment-analysis',
    demoUrl: '#',
    details: {
      problem: "A equipe de produto não conseguia processar manualmente os 10k reviews mensais do e-commerce, perdendo insights valiosos sobre problemas recorrentes e oportunidades de melhoria.",
      solution: "Desenvolvi um pipeline de NLP que realiza pré-processamento (tokenização, remoção de stopwords), vetorização com TF-IDF e classificação via LSTM. O modelo foi treinado com 50k reviews rotulados e integrado a um dashboard automatizado.",
      impact: "Processamento de 100% dos reviews em tempo real. A empresa identificou 3 problemas críticos de produto que estavam gerando 40% dos reviews negativos, permitindo correções rápidas."
    }
  },
  {
    id: '5',
    title: 'Otimização de Rotas (Logística)',
    description: 'Algoritmo de otimização para reduzir custos de entrega e tempo de rota.',
    category: 'analytics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'OR-Tools', 'Google Maps API'],
    metrics: ['30% Redução de Custos'],
    link: 'https://github.com/Euuuller/route-optimization',
    demoUrl: '#',
    details: {
      problem: "A transportadora gastava R$ 150k/mês em combustível devido a rotas ineficientes. Os motoristas seguiam rotas empíricas sem otimização, resultando em atrasos e alto custo operacional.",
      solution: "Implementei o algoritmo de Christofides para o Problema do Caixeiro Viajante (TSP), integrado com a API do Google Maps para dados reais de tráfego. O sistema considera janelas de tempo, capacidade dos veículos e prioridades de entrega.",
      impact: "Redução de 30% nos custos de combustível (R$ 45k/mês economizados) e diminuição de 25% no tempo médio de entrega. A satisfação dos clientes aumentou 18%."
    }
  },
  {
    id: '6',
    title: 'Previsão de Demanda (Time Series)',
    description: 'Modelo de séries temporais para prever demanda de produtos e otimizar estoque.',
    category: 'ml',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop',
    tech: ['Python', 'Prophet', 'ARIMA'],
    metrics: ['MAPE 8%', '20% Redução Estoque'],
    link: 'https://github.com/Euuuller/demand-forecasting',
    demoUrl: '#',
    details: {
      problem: "A rede varejista enfrentava rupturas de estoque em 15% dos produtos e excesso em outros 20%, gerando perdas de R$ 300k/mês entre vendas perdidas e custos de armazenagem.",
      solution: "Desenvolvi modelos de previsão utilizando Prophet (para sazonalidade complexa) e ARIMA (para produtos estáveis). O sistema considera feriados, promoções e eventos externos. Implementei validação cruzada temporal para garantir robustez.",
      impact: "Redução de 60% nas rupturas de estoque e 20% no estoque total. O MAPE médio de 8% permitiu planejamento preciso de compras, economizando R$ 180k/mês."
    }
  }
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'viz', label: 'Dashboards' },
    { id: 'analytics', label: 'Analytics' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDetails = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={sectionRef} className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 dark:text-white">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Soluções práticas em Data Science, Machine Learning e Business Intelligence
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in animate-stagger-1' : 'opacity-0'}`}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-black shadow-lg'
                  : 'bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - CSS Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <article 
              key={project.id}
              className={`project-card glass-card rounded-2xl overflow-hidden group bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/5 flex flex-col h-full cursor-pointer ${
                isVisible ? `animate-fade-in-up animate-stagger-${Math.min(index + 2, 6)}` : 'opacity-0'
              }`}
              onClick={() => openProjectDetails(project)}
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
                    onClick={(e) => { e.stopPropagation(); openProjectDetails(project); }}
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
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={closeProjectDetails} 
        />
      </div>
    </section>
  );
};

export default React.memo(Projects);