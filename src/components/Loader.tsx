import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 dark:border-white/10 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-accent-blue rounded-full animate-spin border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loader;
