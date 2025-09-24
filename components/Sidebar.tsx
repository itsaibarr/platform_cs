'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useProgress } from '../contexts/ProgressContext';
import { gsap } from 'gsap';
import Image from "next/image";

interface SidebarProps {
  selectedLesson: { moduleId: number; lessonId: number } | null;
  onLessonSelect: (moduleId: number, lessonId: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedLesson, onLessonSelect }) => {
  const { modules } = useProgress();
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([1])); // Start with first module expanded
  const lessonsRefs = useRef<{ [key: number]: HTMLUListElement | null }>({});

  const toggleModule = (moduleId: number) => {
    const wasExpanded = expandedModules.has(moduleId);
    setExpandedModules((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });

    // Animate only the specific module
    const lessonsElement = lessonsRefs.current[moduleId];
    if (lessonsElement) {
      const isExpanded = !wasExpanded;
      if (isExpanded) {
        gsap.fromTo(
          lessonsElement,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      } else {
        gsap.to(lessonsElement, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.in' });
      }
    }
  };

  const handleLessonClick = (moduleId: number, lessonId: number) => {
    onLessonSelect(moduleId, lessonId);
  };

  return (
    <aside className="w-1/5 bg-[#F4F4F4] px-[20px] overflow-y-auto font-manrope border-r border-[#E4E4E4] pt-[15px]">
      <h2 className="text-[30px] font-[700] mb-10">Computer Science course</h2>
      {modules.map((module) => (
        <div key={module.id} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer p-2 bg-white rounded-md shadow-sm"
            onClick={() => toggleModule(module.id)}
          >
            <span className="font-[700] text-[18px]">{module.title}</span>
            <span className="">{expandedModules.has(module.id) ? <Image src="/arrow-down.svg" width="12" height="12" alt='arrow' /> : <Image src="/arrow-up.svg" width="12" height="6" alt='arrow'/>}</span>
          </div>
          <ul
            ref={(el) => {
              if (el) {
                lessonsRefs.current[module.id] = el;
              }
            }}
            className={`mt-2 ml-4 overflow-hidden ${expandedModules.has(module.id) ? '' : 'h-0 opacity-0'}`}
            style={{ height: expandedModules.has(module.id) ? 'auto' : 0 }}
          >
            {module.lessons.map((lesson) => (
              <li
                key={lesson.id}
                className={`p-[5px] cursor-pointer rounded-md mb-1 transition-all duration-300 ease-in-out text-[#727272] list-none ${
                  selectedLesson?.moduleId === module.id && selectedLesson?.lessonId === lesson.id
                    ? 'bg-blue-200'
                    : 'hover:bg-gray-200'
                } ${lesson.isCompleted ? 'text-green-600' : 'text-[#727272] hover:text-[#141414]'}`}
                onClick={() => handleLessonClick(module.id, lesson.id)}
              >
                {lesson.title} {lesson.isCompleted && <Image src="/check.svg" width="14" height="14" alt='arrow' />}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
