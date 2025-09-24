'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import LessonContent from '../components/LessonContent';

export default function Home() {
  const [selectedLesson, setSelectedLesson] = useState<{ moduleId: number; lessonId: number } | null>(null);

  const handleLessonSelect = (moduleId: number, lessonId: number) => {
    setSelectedLesson({ moduleId, lessonId });
  };

  return (
    <div className="min-h-screen bg-[#fff] flex flex-col">
      <Navbar />
      <div className="flex flex-1" style={{ minHeight: 'calc(100vh - 60px)' }}>
        <Sidebar selectedLesson={selectedLesson} onLessonSelect={handleLessonSelect} />
        <LessonContent selectedLesson={selectedLesson} />
      </div>
    </div>
  );
}
