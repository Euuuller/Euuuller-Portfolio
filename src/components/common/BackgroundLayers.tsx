import React from 'react';
import MathBackground from '../sections/MathBackground';

interface BackgroundLayersProps {
  isMobile: boolean;
}

const BackgroundLayers: React.FC<BackgroundLayersProps> = ({ isMobile }) => {
  return (
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
  );
};

export default React.memo(BackgroundLayers);
