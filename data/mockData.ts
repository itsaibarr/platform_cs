// Mock data for the Computer Science educational platform
export interface Lesson {
  id: number;
  title: string;
  youtubeUrl: string;
  homework: string;
  isCompleted: boolean;
}

export interface Module {
  id: number;
  title: string;
  lessons: Lesson[];
  isExpanded: boolean;
}

export const modules: Module[] = [
  {
    id: 1,
    title: "Модуль 1: Введение в Computer Science (CSS-inspired)",
    isExpanded: true,
    lessons: [
      {
        id: 1,
        title: "Урок 1: Что такое CSS, двоичная система, как хранится информация.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder YouTube URL
        homework: "Сверстать макет 'Карточка профиля'. Обязательные элементы: 1. Фото профиля (можно взять любое с Pexels или Unsplash). 2. Имя и короткое описание. 3. Кнопки (например, 'Follow', 'Message'). 4. Все должно быть выровнено по центру, с помощью Flexbox. Доп. требования: • Сделать карточку с рамкой, закругленными углами и тенью. • Добавить разный цвет для кнопок при наведении (hover effect). • Формат сдачи: HTML + CSS в виде папки проекта или CodePen/JSFiddle ссылкой. • Скриншот готового макета.",
        isCompleted: false,
      },
      {
        id: 2,
        title: "Урок 2: Алгоритмы и псевдокод.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Написать алгоритм для простой задачи, например, поиска максимального числа в массиве.",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Урок 3: Память, переменные, типы данных.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать переменные разных типов и вывести их значения.",
        isCompleted: false,
      },
      {
        id: 4,
        title: "Урок 4: Условные операторы и циклы (на примере Scratch или Python).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Написать программу с условными операторами и циклами.",
        isCompleted: false,
      },
      {
        id: 5,
        title: "Урок 5: Введение в функции.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать функцию для расчета суммы двух чисел.",
        isCompleted: false,
      },
      {
        id: 6,
        title: "Урок 6: Масштабирование: сложность алгоритмов (O-нотация).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Проанализировать сложность простого алгоритма.",
        isCompleted: false,
      },
      {
        id: 7,
        title: "Урок 7: Работа со строками и массивами.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Написать код для работы со строками и массивами.",
        isCompleted: false,
      },
      {
        id: 8,
        title: "Урок 8: Итоговый проект – простая игра или симуляция (например, 'угадай число', калькулятор, или текстовая RPG).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать и сдать итоговый проект.",
        isCompleted: false,
      },
    ],
  },
  {
    id: 2,
    title: "Модуль 2: Основы веб-разработки (HTML, CSS, JS)",
    isExpanded: false,
    lessons: [
      {
        id: 9,
        title: "Урок 9: Как работает интернет: клиент-сервер, браузеры.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Исследовать, как работает интернет.",
        isCompleted: false,
      },
      {
        id: 10,
        title: "Урок 10: Основы HTML.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать простую HTML страницу.",
        isCompleted: false,
      },
      {
        id: 11,
        title: "Урок 11: Основы CSS.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Стилизовать HTML страницу.",
        isCompleted: false,
      },
      {
        id: 12,
        title: "Урок 12: Flexbox, Grid.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Использовать Flexbox и Grid в проекте.",
        isCompleted: false,
      },
      {
        id: 13,
        title: "Урок 13: Основы JavaScript.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Написать простой JavaScript код.",
        isCompleted: false,
      },
      {
        id: 14,
        title: "Урок 14: DOM и работа с элементами.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Манипулировать DOM элементами.",
        isCompleted: false,
      },
      {
        id: 15,
        title: "Урок 15: События в JS.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Обработать события в JavaScript.",
        isCompleted: false,
      },
      {
        id: 16,
        title: "Урок 16: Итоговый проект – личный сайт-визитка / одностраничный лендинг.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать личный сайт-визитку.",
        isCompleted: false,
      },
    ],
  },
  {
    id: 3,
    title: "Модуль 3: Продвинутая веб-разработка (JS + Next.js + Tailwind)",
    isExpanded: false,
    lessons: [
      {
        id: 17,
        title: "Урок 17: Что такое SPA и SSR.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Изучить SPA и SSR.",
        isCompleted: false,
      },
      {
        id: 18,
        title: "Урок 18: Next.js базовая структура.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить Next.js проект.",
        isCompleted: false,
      },
      {
        id: 19,
        title: "Урок 19: Tailwind CSS основы.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Использовать Tailwind в проекте.",
        isCompleted: false,
      },
      {
        id: 20,
        title: "Урок 20: Роутинг в Next.js.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить роутинг.",
        isCompleted: false,
      },
      {
        id: 21,
        title: "Урок 21: Компоненты, props, состояние.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать компоненты в React.",
        isCompleted: false,
      },
      {
        id: 22,
        title: "Урок 22: Работа с API (fetch, JSON).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Сделать запрос к API.",
        isCompleted: false,
      },
      {
        id: 23,
        title: "Урок 23: Хуки базовой React-state.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Использовать React hooks.",
        isCompleted: false,
      },
      {
        id: 24,
        title: "Урок 24: Итоговый проект – сайт с несколькими страницами (например, блог или каталог).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать многостраничный сайт.",
        isCompleted: false,
      },
    ],
  },
  {
    id: 4,
    title: "Модуль 4: Backend основы (Node.js, Express, базы данных)",
    isExpanded: false,
    lessons: [
      {
        id: 25,
        title: "Урок 25: Что такое backend.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Изучить backend.",
        isCompleted: false,
      },
      {
        id: 26,
        title: "Урок 26: Node.js основы.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить Node.js.",
        isCompleted: false,
      },
      {
        id: 27,
        title: "Урок 27: Express.js основы.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать Express сервер.",
        isCompleted: false,
      },
      {
        id: 28,
        title: "Урок 28: REST API.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать REST API.",
        isCompleted: false,
      },
      {
        id: 29,
        title: "Урок 29: Работа с файлами и JSON.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Работать с файлами.",
        isCompleted: false,
      },
      {
        id: 30,
        title: "Урок 30: Базы данных (SQLite / MongoDB).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить базу данных.",
        isCompleted: false,
      },
      {
        id: 31,
        title: "Урок 31: Подключение фронтенда и бэкенда.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Подключить frontend к backend.",
        isCompleted: false,
      },
      {
        id: 32,
        title: "Урок 32: Итоговый проект – Todo app с базой данных.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать Todo app.",
        isCompleted: false,
      },
    ],
  },
];
