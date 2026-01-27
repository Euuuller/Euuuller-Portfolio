import React, { createContext, useContext, useState } from 'react';

interface ResumeContextType {
  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = React.useCallback(() => setIsResumeOpen(true), []);
  const closeResume = React.useCallback(() => setIsResumeOpen(false), []);

  const contextValue = React.useMemo(() => ({ isResumeOpen, openResume, closeResume }), [isResumeOpen, openResume, closeResume]);

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};