'use client';

import React, { useState } from 'react';
import { useProgress } from '../contexts/ProgressContext';

interface LessonContentProps {
  selectedLesson: { moduleId: number; lessonId: number } | null;
}

const LessonContent: React.FC<LessonContentProps> = ({ selectedLesson }) => {
  const { modules } = useProgress();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [studentName, setStudentName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!selectedLesson) {
    return (
      <main className="w-2/3 p-8 bg-white font-manrope">
        <p className="text-gray-500">Выберите урок для просмотра.</p>
      </main>
    );
  }

  // ✅ Переименовал переменную
  const selectedModule = modules.find((m) => m.id === selectedLesson.moduleId);
  const lesson = selectedModule?.lessons.find((l) => l.id === selectedLesson.lessonId);

  if (!lesson) {
    return (
      <main className="w-4/5 p-8 bg-white font-manrope">
        <p className="text-red-500">Урок не найден.</p>
      </main>
    );
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
        'image/png',
        'image/jpeg',
      ];

      if (!allowedTypes.includes(file.type)) {
        setMessage({ type: 'error', text: 'Недопустимый тип файла. Разрешены: PDF, DOCX, TXT, PNG, JPG' });
        setSelectedFile(null);
        return;
      }

      const maxSize = 10 * 1024 * 1024; // 10MB
      if (file.size > maxSize) {
        setMessage({ type: 'error', text: 'Файл слишком большой. Максимальный размер: 10MB' });
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file);
      setMessage(null);
    }
  };

  const handleSubmitHomework = async () => {
    if (!selectedFile) {
      setMessage({ type: 'error', text: 'Пожалуйста, выберите файл для отправки' });
      return;
    }

    if (!studentName.trim()) {
      setMessage({ type: 'error', text: 'Пожалуйста, введите ваше имя' });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('studentName', studentName.trim());
      formData.append('lessonTitle', lesson.title);
      formData.append('moduleId', selectedLesson.moduleId.toString());
      formData.append('lessonId', selectedLesson.lessonId.toString());

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Домашняя работа успешно отправлена!' });
        setSelectedFile(null);
        setStudentName('');
        const fileInput = document.getElementById('homework-file') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setMessage({ type: 'error', text: result.error || 'Произошла ошибка при отправке домашней работы' });
      }
    } catch (error) {
      console.error('Error submitting homework:', error);
      setMessage({ type: 'error', text: 'Произошла ошибка при отправке домашней работы. Пожалуйста, попробуйте еще раз.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-4/5 bg-white font-manrope flex flex-col justify-center items-start max-w-[1000px] m-auto lesson-content">
      <h1 className="text-[38px] text-[#141414] font-medium mb-4">{lesson.title}</h1>
      <div className="mb-6">
        <iframe
          width="1000"
          height="500"
          src={lesson.youtubeUrl}
          title={lesson.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Домашняя работа:</h2>
        <p className="text-gray-700 whitespace-pre-line">{lesson.homework}</p>
      </div>

      {/* Homework Submission Section */}
      <div className="w-full max-w-2xl mb-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold mb-4">Отправка домашней работы</h3>

        <div className="mb-4">
          <label htmlFor="student-name" className="block text-sm font-medium text-gray-700 mb-2">
            Ваше имя *
          </label>
          <input
            type="text"
            id="student-name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Введите ваше имя"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="homework-file" className="block text-sm font-medium text-gray-700 mb-2">
            Выберите файл *
          </label>
          <input
            type="file"
            id="homework-file"
            accept=".pdf,.docx,.txt,.png,.jpg,.jpeg"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            disabled={isSubmitting}
          />
          <p className="text-sm text-gray-500 mt-1">
            Разрешены файлы: PDF, DOCX, TXT, PNG, JPG (максимум 10MB)
          </p>
          {selectedFile && (
            <p className="text-sm text-green-600 mt-1">
              Выбран файл: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
            </p>
          )}
        </div>

        <button
          onClick={handleSubmitHomework}
          disabled={isSubmitting || !selectedFile || !studentName.trim()}
          className="w-full bg-blue-500 text-white px-4 py-3 rounded-md hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {isSubmitting ? 'Отправляем...' : 'Отправить домашнюю работу'}
        </button>

        {message && (
          <div
            className={`mt-4 p-3 rounded-md ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
    </main>
  );
};

export default LessonContent;
