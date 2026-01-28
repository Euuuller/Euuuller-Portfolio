import React, { Suspense, lazy } from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/sections/Footer';
import ResumeModal from './components/common/ResumeModal';
import CustomCursor from './components/common/CustomCursor';
import BackgroundLayers from './components/common/BackgroundLayers';
import { ThemeProvider } from './contexts/ThemeContext';
import { ResumeProvider } from './contexts/ResumeContext';
import Loader from './components/common/Loader';
import { useIsMobile } from './hooks/useMediaQuery';

// Lazy load heavy components
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Contact = lazy(() => import('./components/sections/Contact'));

const AppContent: React.FC = () => {
  const isMobile = useIsMobile(); // Optimized hook with debouncing

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 font-sans selection:bg-accent-blue selection:text-white overflow-x-hidden transition-colors duration-300 relative">
      {/* Conditionally render CustomCursor only on non-mobile devices to improve performance */}
      {!isMobile && <CustomCursor />}
      
      {/* Global Background Layers */}
      <BackgroundLayers isMobile={isMobile} />

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