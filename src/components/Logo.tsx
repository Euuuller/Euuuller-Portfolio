import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Euller AI Logo"
    >
      {/* Central "Neural Core" / Hexagon representing structure/engineering */}
      <path
        d="M12 4L19 8V16L12 20L5 16V8L12 4Z"
        className="stroke-accent-blue dark:stroke-white stroke-2 fill-none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Inner Connections / Neural Synapses */}
      <path
        d="M12 4V12"
        className="stroke-accent-purple stroke-[1.5] opacity-60"
      />
      <path
        d="M12 12L5 8"
        className="stroke-accent-purple stroke-[1.5] opacity-60"
      />
      <path
        d="M12 12L19 8"
        className="stroke-accent-purple stroke-[1.5] opacity-60"
      />
      
      {/* Floating Nodes / AI particles */}
      <circle cx="12" cy="12" r="2" className="fill-accent-cyan animate-pulse" />
      <circle cx="12" cy="4" r="1.5" className="fill-accent-blue" />
      <circle cx="19" cy="8" r="1.5" className="fill-accent-blue" />
      <circle cx="5" cy="8" r="1.5" className="fill-accent-blue" />
    </svg>
  );
};

export default Logo;
