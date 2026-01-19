import React, { useRef } from 'react';
import { X, Printer, Download, Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import { useResume } from '../ResumeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeModal: React.FC = () => {
  const { isResumeOpen, closeResume } = useResume();
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  if (!isResumeOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto print:p-0 print:bg-white print:overflow-visible"
        onClick={closeResume}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl rounded-lg overflow-hidden flex flex-col print:shadow-none print:w-full print:max-w-none print:rounded-none"
        >
          {/* Controls - Hidden when printing */}
          <div className="sticky top-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center print:hidden z-10">
            <h3 className="font-semibold">Visualização do Currículo</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-accent-blue hover:bg-blue-600 rounded-md transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Salvar PDF / Imprimir
              </button>
              <button
                onClick={closeResume}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CV Content - A4 Format */}
          <div className="p-[15mm] md:p-[20mm] text-gray-800 font-sans" ref={printRef}>
            
            {/* Header */}
            <header className="border-b-2 border-gray-800 pb-6 mb-6">
              <h1 className="text-4xl font-bold text-gray-900 uppercase tracking-tight mb-2">
                Euller dos Santos R. Duarte
              </h1>
              <p className="text-xl text-accent-blue font-medium mb-4">
                Analista de Dados & Estudante de Engenharia Elétrica
              </p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Açailândia - MA, Brasil
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  euller.santos.duarte@gmail.com
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  +55 (99) 99216-8287
                </div>
                <div className="flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" />
                  linkedin.com/in/euuuller
                </div>
                <div className="flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  github.com/Euuuller
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
              
              {/* Left Column (Main) */}
              <div className="md:col-span-2 print:col-span-2 space-y-6">
                
                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3 flex items-center gap-2">
                    Resumo Profissional
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-700 text-justify">
                    Graduando em Engenharia Elétrica pelo IFMA com forte especialização em Análise de Dados. 
                    Possuo experiência prática no desenvolvimento de soluções data-driven utilizando Python, SQL e Power BI. 
                    Tenho um histórico comprovado em projetos de análise de comportamento de clientes (RFM), previsão de demanda 
                    e criação de dashboards executivos para suporte à tomada de decisão. Busco oportunidades para aplicar 
                    conhecimentos de estatística, machine learning e visualização de dados em problemas reais de negócio.
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
                    Projetos em Destaque
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-gray-900">Segmentação de Clientes (RFM)</h3>
                      <p className="text-xs text-accent-blue mb-1">Python, Pandas, Power BI</p>
                      <p className="text-sm text-gray-700">
                        Desenvolvimento de algoritmo de clusterização para classificar base de 1.5k clientes. 
                        Identificou 5 perfis de consumo distintos baseados em Recência, Frequência e Valor, 
                        permitindo estratégias de marketing personalizadas.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">Dashboard Gerencial de Vendas</h3>
                      <p className="text-xs text-accent-blue mb-1">Power BI, DAX, SQL</p>
                      <p className="text-sm text-gray-700">
                        Criação de painel interativo conectado a banco de dados SQL. Monitoramento de KPIs 
                        em tempo real, análise geográfica de vendas e comparativo YoY (Year over Year), 
                        otimizando a visão estratégica da diretoria.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">Previsão de Demanda com Machine Learning</h3>
                      <p className="text-xs text-accent-blue mb-1">Python, Prophet, Scikit-learn</p>
                      <p className="text-sm text-gray-700">
                        Implementação de modelo de séries temporais para forecasting de vendas. 
                        Atingiu MAPE (Erro Percentual Absoluto Médio) de apenas 12% nas previsões de 30 dias, 
                        auxiliando na redução de excesso de estoque.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
                    Experiência Acadêmica
                  </h2>
                  <div className="mb-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-900">Instituto Federal do Maranhão (IFMA)</h3>
                      <span className="text-sm text-gray-500">2022 - Presente</span>
                    </div>
                    <p className="text-sm text-gray-700 italic">Pesquisador Junior & Monitoria</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-1 pl-1">
                      <li>Desenvolvimento de scripts em Python para automação de coleta de dados de sensores.</li>
                      <li>Análise estatística de dados experimentais em laboratório de circuitos.</li>
                    </ul>
                  </div>
                </section>

              </div>

              {/* Right Column (Sidebar) */}
              <div className="space-y-6">
                
                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
                    Educação
                  </h2>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">Bacharelado em Engenharia Elétrica</h3>
                    <p className="text-sm text-gray-600">IFMA - Campus Açailândia</p>
                    <p className="text-xs text-gray-500 mt-1">Previsão de conclusão: 2026</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
                    Habilidades Técnicas
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Linguagens</h4>
                      <p className="text-sm text-gray-600">Python, SQL, R, C++</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Análise de Dados</h4>
                      <p className="text-sm text-gray-600">Pandas, NumPy, Excel Avançado</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Visualização</h4>
                      <p className="text-sm text-gray-600">Power BI (DAX), Tableau, Matplotlib</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Machine Learning</h4>
                      <p className="text-sm text-gray-600">Scikit-learn, TensorFlow, Prophet</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-800">Ferramentas</h4>
                      <p className="text-sm text-gray-600">Git, Docker, Jupyter Notebook</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
                    Idiomas
                  </h2>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><span className="font-medium text-gray-800">Português:</span> Nativo</li>
                    <li><span className="font-medium text-gray-800">Inglês:</span> Intermediário (Leitura técnica)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-lg font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
                    Soft Skills
                  </h2>
                  <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                    <li>Pensamento Analítico</li>
                    <li>Resolução de Problemas</li>
                    <li>Comunicação de Dados</li>
                    <li>Trabalho em Equipe</li>
                  </ul>
                </section>

              </div>
            </div>
            
            {/* Footer for print */}
            <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-500 hidden print:block">
              Currículo gerado via Portfolio Web - https://euuuller.github.io
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;