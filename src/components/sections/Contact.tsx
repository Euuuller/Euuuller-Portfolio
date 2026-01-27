import React from 'react';
import { Mail, Linkedin, Github, BookOpen, Send } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background Decor - Optimized */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-blue/5 rounded-full blur-[50px] md:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll width="100%">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                Vamos <span className="text-gradient">Conversar?</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Estou disponível para projetos de análise de dados e oportunidades de estágio.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              {/* Social Links */}
              <div className="md:col-span-2 space-y-4">
                
                {/* Email - Original Red Color & Full Text */}
                <a 
                  href="mailto:euller.santos.duarte@gmail.com"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group border border-gray-200 dark:border-white/5"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                    <div className="text-gray-900 dark:text-white font-medium text-sm break-words">
                      euller.santos.duarte@gmail.com
                    </div>
                  </div>
                </a>

                {/* LinkedIn - Original Blue Color */}
                <a 
                  href="https://linkedin.com/in/euuuller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group border border-gray-200 dark:border-white/5"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                    <div className="text-gray-900 dark:text-white font-medium text-sm">/in/euuuller</div>
                  </div>
                </a>

                {/* GitHub - Original Black/White */}
                <a 
                  href="https://github.com/Euuuller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group border border-gray-200 dark:border-white/5"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-black dark:text-white group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                    <div className="text-gray-900 dark:text-white font-medium text-sm">@euuuller</div>
                  </div>
                </a>

                {/* Medium - Orange (Requested) */}
                <a 
                  href="https://medium.com/@euller.santos.duarte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group border border-gray-200 dark:border-white/5"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Medium / Blog</div>
                    <div className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm truncate">
                      @euller.santos.duarte
                    </div>
                  </div>
                </a>
              </div>

              {/* Contact Form */}
              <form 
                action="https://formsubmit.co/euller.santos.duarte@gmail.com" 
                method="POST"
                className="md:col-span-3 glass-card p-6 md:p-8 rounded-2xl space-y-4 border border-gray-200 dark:border-white/5"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-600 dark:text-gray-400 ml-1">Nome</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Seu nome"
                      className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="seu@email.com"
                      className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-600 dark:text-gray-400 ml-1">Assunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    required 
                    placeholder="Sobre o projeto..."
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-600 dark:text-gray-400 ml-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder="Como posso ajudar?"
                    className="w-full bg-white dark:bg-[#0A0A0A] border border-gray-300 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-accent-blue transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-accent-blue hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 mt-4"
                >
                  Enviar Mensagem
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default React.memo(Contact);