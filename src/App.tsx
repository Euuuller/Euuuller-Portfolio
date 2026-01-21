import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import MathBackground from './components/MathBackground';
import { ThemeProvider } from './ThemeContext';
import { ResumeProvider } from './ResumeContext';
import Loader from './components/Loader';

// Lazy load heavy components
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-accent-blue selection:text-white overflow-x-hidden transition-colors duration-300 relative">
      <CustomCursor />
      
      {/* Global Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Solid Color: Pure White or Pure Black */}
        <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-300" />
        
        {/* Math Formulas Layer (Engineering Background) */}
        <MathBackground />
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
        
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