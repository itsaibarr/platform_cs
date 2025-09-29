'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { modules, Module } from '../data/mockData';

interface ProgressContextType {
  modules: Module[];
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  return (
    <ProgressContext.Provider
      value={{
        modules,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
