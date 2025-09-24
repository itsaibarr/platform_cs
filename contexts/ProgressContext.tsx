'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { modules, Module, Lesson } from '../data/mockData';

interface ProgressContextType {
  modules: Module[];
  updateLessonCompletion: (moduleId: number, lessonId: number, isCompleted: boolean) => void;
  getCurrentLesson: () => Lesson | null;
  getNextLesson: () => Lesson | null;
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
  const [modulesState, setModulesState] = useState<Module[]>(modules);

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('cs-course-progress');
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress);
      setModulesState(parsedProgress);
    }
  }, []);

  // Save progress to localStorage whenever modulesState changes
  useEffect(() => {
    localStorage.setItem('cs-course-progress', JSON.stringify(modulesState));
  }, [modulesState]);

  const updateLessonCompletion = (moduleId: number, lessonId: number, isCompleted: boolean) => {
    setModulesState((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              lessons: module.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, isCompleted } : lesson
              ),
            }
          : module
      )
    );
  };

  const getCurrentLesson = (): Lesson | null => {
    for (const module of modulesState) {
      for (const lesson of module.lessons) {
        if (!lesson.isCompleted) {
          return lesson;
        }
      }
    }
    return null; // All lessons completed
  };

  const getNextLesson = (): Lesson | null => {
    for (const module of modulesState) {
      for (const lesson of module.lessons) {
        if (!lesson.isCompleted) {
          return lesson;
        }
      }
    }
    return null;
  };

  return (
    <ProgressContext.Provider
      value={{
        modules: modulesState,
        updateLessonCompletion,
        getCurrentLesson,
        getNextLesson,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
