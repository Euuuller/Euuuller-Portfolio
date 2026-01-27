import React, { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/sections/Footer';
import ResumeModal from './components/common/ResumeModal';
import CustomCursor from './components/common/CustomCursor';
import MathBackground from './components/sections/MathBackground';
import { ThemeProvider } from './contexts/ThemeContext';
import { ResumeProvider } from './contexts/ResumeContext';
import Loader from './components/common/Loader';

// Lazy load heavy components
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

const AppContent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-accent-blue selection:text-white overflow-x-hidden transition-colors duration-300 relative">
      {/* Conditionally render CustomCursor only on non-mobile devices to improve performance */}
      {!isMobile && <CustomCursor />}
      
      {/* Global Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Solid Color: Pure White or Pure Black */}
        <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-300" />
        
        {/* Math Formulas Layer (Engineering Background) - Passes isMobile for optimization */}
        <MathBackground isMobile={isMobile} />
        
        {/* Noise Overlay - Optimized for Mobile (avoid mix-blend-soft-light on mobile) */}
        <div 
          className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] ${
            isMobile ? 'opacity-10' : 'opacity-20 mix-blend-soft-light'
          }`} 
        />
        
        {/* Grid Pattern - Adapts color for visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Suspense fallback={<Loader />}>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <ResumeModal />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <AppContent />
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;