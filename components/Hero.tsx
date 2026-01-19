import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150);
  
  const toRotate = ["Analista de Dados", "Data Analyst"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) setDelta(prev => prev / 1.5);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 dark:bg-accent-blue/10 rounded-full blur-[128px] pointer-events-none mix-blend-multiply dark:mix-blend-normal" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-[128px] pointer-events-none mix-blend-multiply dark:mix-blend-normal" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-6">
            Disponível para novos projetos
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-gray-900 dark:text-white leading-tight">
            Olá, eu sou <br className="md:hidden" />
            <span className="text-gray-900 dark:text-white block mt-2 md:mt-0">Euller dos Santos Rodrigues Duarte</span>
          </h1>
          
          <div className="h-16 md:h-20 mb-6 flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              {text}
              <span className="text-gray-400 font-light">|</span>
            </h2>
          </div>

          <div className="mb-10 max-w-2xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light">
              Olá, seja muito bem vindo ao meu portfólio de projetos
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#projetos" className="px-8 py-3 bg-accent-blue hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
              Ver Projetos
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contato" className="px-8 py-3 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-lg font-medium transition-all backdrop-blur-sm">
              Entrar em Contato
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500">
        <ChevronDown className="w-8 h-8 animate-bounce" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;