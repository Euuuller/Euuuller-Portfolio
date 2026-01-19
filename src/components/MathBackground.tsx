import React from 'react';

interface Formula {
  text: string;
  sup?: string;
  sub?: string;
  suffix?: string;
  className: string;
  label: string;
  isSignature?: boolean; // New property to identify the signature formula
}

const formulas: Formula[] = [
  // --- EULER (Homenagem ao nome - Destaque / Assinatura) ---
  { 
    text: "e", 
    sup: "iπ", 
    suffix: " + 1 = 0", 
    className: "text-4xl md:text-6xl top-[12%] left-[5%] md:left-[10%] rotate-[-6deg] z-0 font-bold", 
    label: "Identidade de Euler",
    isSignature: true 
  },

  // --- CÁLCULO ---
  { text: "∫", className: "text-9xl top-[-2%] left-[2%] rotate-[-15deg] opacity-[0.03]", label: "Integral" },
  { text: "lim", sub: "x→∞", className: "text-2xl md:text-3xl top-[8%] right-[8%] rotate-[5deg] opacity-[0.08]", label: "Limite" },
  { text: "∂/∂x", className: "text-3xl md:text-4xl bottom-[25%] left-[5%] rotate-[20deg] opacity-[0.05]", label: "Derivada Parcial" },
  { text: "∑", className: "text-8xl bottom-[-5%] right-[35%] rotate-[10deg] opacity-[0.03]", label: "Somatório" },
  { text: "dy/dx", className: "text-xl md:text-2xl top-[35%] right-[15%] rotate-[-10deg] opacity-[0.06]", label: "Derivada" },
  { text: "∮", className: "text-6xl top-[5%] right-[35%] rotate-[15deg] opacity-[0.04]", label: "Integral Fechada" },

  // --- ENGENHARIA ELÉTRICA ---
  { text: "V = L(di/dt)", className: "text-sm md:text-lg bottom-[15%] right-[10%] rotate-[-5deg] opacity-[0.08]", label: "Indutor" },
  { text: "Z = R + jX", className: "text-lg md:text-xl top-[60%] left-[5%] rotate-[8deg] opacity-[0.08]", label: "Impedância" },
  { text: "P = V·I", className: "text-5xl md:text-7xl top-[40%] left-[-2%] rotate-[-90deg] opacity-[0.03]", label: "Potência" },
  { text: "X_L = 2πfL", className: "text-sm md:text-lg bottom-[50%] right-[20%] rotate-[-15deg] opacity-[0.06]", label: "Reatância Indutiva" },
  
  // --- SINAIS E SISTEMAS ---
  { text: "x(t) * h(t)", className: "text-base md:text-lg top-[25%] left-[35%] rotate-[5deg] opacity-[0.05]", label: "Convolução" },
  { text: "ℒ", className: "text-6xl md:text-8xl top-[75%] right-[15%] rotate-[-10deg] opacity-[0.04]", label: "Laplace" },
  
  // --- ELETROMAGNETISMO (Maxwell) ---
  { text: "∇·D = ρ", className: "text-lg md:text-xl bottom-[10%] left-[25%] rotate-[-5deg] opacity-[0.07]", label: "Gauss" },
  { text: "∇×H", suffix: " = J + ∂D/∂t", className: "text-sm md:text-base bottom-[40%] left-[85%] rotate-[5deg] opacity-[0.06]", label: "Ampère-Maxwell" },
];

const MathBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {formulas.map((item, index) => (
        <div
          key={index}
          className={`absolute font-serif font-medium italic transition-all duration-1000 ease-in-out ${item.className} ${
            item.isSignature 
              ? 'text-accent-blue/20 dark:text-accent-blue/20 mix-blend-normal' // Signature styling
              : 'text-gray-900 dark:text-white mix-blend-overlay' // Standard styling
          }`}
        >
          <span className="relative whitespace-nowrap">
            {item.text}
            {item.sup && <sup className="text-[0.6em] align-super">{item.sup}</sup>}
            {item.sub && <sub className="text-[0.4em] align-baseline ml-0.5">{item.sub}</sub>}
            {item.suffix}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MathBackground;