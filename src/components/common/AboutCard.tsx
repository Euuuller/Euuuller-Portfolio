import React from 'react';

interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-blue/50 transition-colors duration-300 group shadow-sm hover:shadow-md h-full">
      <div className="mb-3 p-2 rounded-lg bg-gray-50 dark:bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">{subtitle}</p>
    </div>
  );
};

export default React.memo(AboutCard);
