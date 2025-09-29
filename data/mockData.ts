// Mock data for the Computer Science educational platform
export interface Lesson {
  id: number;
  title: string;
  youtubeUrl: string;
  homework: string;
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
    title: "Модуль 1: Введение в Computer Science (CS50-inspired)",
    isExpanded: true,
    lessons: [
      {
        id: 1,
        title: "Урок 1: Что такое Binary system, вводный урок в CS.",
        youtubeUrl: "https://www.youtube.com/embed/uaFduBhWlzc?si=IA9sa5rCOS2jTf4u", // Placeholder YouTube URL
        homework: "Рассказать своими словами о том что вы поняли тему, переведите числа 5,12,43,52 а также буквы a,d,k,u в бинарную систему вычислений",
      },
      {
        id: 2,
        title: "Урок 2: ASCII, а также для чего нужна Binary system.",
        youtubeUrl: "https://www.youtube.com/embed/EWaqiXSXeC8?si=Jrm4kCObGcl33NHX",
        homework: `Переведите двоичный код "11010010 10100000 11000010 10100000 11010010 10100000 
        11010010 10100010 11000010 10100000 11010010 10111010 11010010 10100001 
        11010010 10100011 11000010 10100001 11010010 10101100 11000010 10100000" в сообщение и отправьте мне.`,
      },
      {
        id: 3,
        title: "Урок 3: Что такое Псевдо код, алгоритмы перечисления.",
        youtubeUrl: "https://www.youtube.com/embed/aIlDdHWUIMo?si=HTWtZleSvB8WVda3",
        homework: `1) Написать алгоритм перечисления всех чётных чисел от 1 до 20 в виде псевдокода.
                  2) Придумать алгоритм перечисления всех букв в слове (например, «школа») и записать его в псевдокоде..`,
      },
      {
        id: 4,
        title: "Урок 4: Условные операторы и циклы (на примере Scratch или Python).",
        youtubeUrl: "https://www.youtube.com/embed/ysWS0JHqMdE?si=JFW64PAO4d1d9pev",
        homework: `Перейдите по ссылке: https://blockly.games/maze?lang=en
                  Пройдите игру «Maze» (лабиринт).
                  Сделайте скриншоты с вашими ответами.
                  Отправьте скриншоты в качестве выполнения задания.
                  `,
      },
      {
        id: 5,
        title: "Урок 5: Code Editor, основы HTML.",
        youtubeUrl: "https://www.youtube.com/embed/HGTJBPNC-Gw?si=K2fKgoglyBL9keK1",
        homework: `Создать HTML-страницу index.html с таким содержимым:
                    Заголовок <h1> с текстом «Моя первая страница».
                    Добавить атрибут style, чтобы изменить цвет текста.
                    Картинку через тег <img>:
                    Использовать атрибуты src, alt, width.
                    Проверить, что картинка отображается и что alt-текст появляется, если картинки нет.
                    Ссылку <a> на любой сайт:
                    Применить атрибут href и target="_blank".
                    Параграф <p> с любым текстом.
                    Добавить атрибут title, чтобы при наведении мышки появлялась подсказка.`,
      },
      {
        id: 6,
        title: "Урок 6: Что такое CSS, как связывать HTML и CSS.",
        youtubeUrl: "https://www.youtube.com/embed/HGTJBPNC-Gw?si=K2fKgoglyBL9keK1",
        homework: `Создать проект с файлами:
                    index.html
                    style.css
                    Задачи:
                    В index.html создать:
                    Заголовок <h1> с текстом «Моя первая страница с CSS».
                    Параграф <p> с любым текстом.
                    Кнопку <button> с текстом «Нажми меня».
                    В style.css оформить:
                    Для <h1>: красный цвет текста.
                    Для <p>: размер шрифта 18px, цвет — серый.
                    Для <button>: зелёный фон, белый текст, скруглённые углы.
                    Связать style.css с index.html через тег <link> в <head>.`,
      },
      {
        id: 7,
        title: "Урок 7: О мире веб-разработки(Frontend and Backend).",
        youtubeUrl: "https://www.youtube.com/embed/HGTJBPNC-Gw?si=K2fKgoglyBL9keK1",
        homework: "Рассказать о том кем вы хотели бы стать в будущем.",
      },
      {
        id: 8,
        title: "Урок 8: Итоговый проект – верстка первого легкого макета на основе HTML, CSS.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать и сдать итоговый проект.",
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
      },
      {
        id: 10,
        title: "Урок 10: Основы HTML.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать простую HTML страницу.",
      },
      {
        id: 11,
        title: "Урок 11: Основы CSS.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Стилизовать HTML страницу.",
      },
      {
        id: 12,
        title: "Урок 12: Flexbox, Grid.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Использовать Flexbox и Grid в проекте.",
      },
      {
        id: 13,
        title: "Урок 13: Основы JavaScript.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Написать простой JavaScript код.",
      },
      {
        id: 14,
        title: "Урок 14: DOM и работа с элементами.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Манипулировать DOM элементами.",
      },
      {
        id: 15,
        title: "Урок 15: События в JS.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Обработать события в JavaScript.",
      },
      {
        id: 16,
        title: "Урок 16: Итоговый проект – личный сайт-визитка / одностраничный лендинг.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать личный сайт-визитку.",
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
      },
      {
        id: 18,
        title: "Урок 18: Next.js базовая структура.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить Next.js проект.",
      },
      {
        id: 19,
        title: "Урок 19: Tailwind CSS основы.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Использовать Tailwind в проекте.",
      },
      {
        id: 20,
        title: "Урок 20: Роутинг в Next.js.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить роутинг.",
      },
      {
        id: 21,
        title: "Урок 21: Компоненты, props, состояние.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать компоненты в React.",
      },
      {
        id: 22,
        title: "Урок 22: Работа с API (fetch, JSON).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Сделать запрос к API.",
      },
      {
        id: 23,
        title: "Урок 23: Хуки базовой React-state.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Использовать React hooks.",
      },
      {
        id: 24,
        title: "Урок 24: Итоговый проект – сайт с несколькими страницами (например, блог или каталог).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать многостраничный сайт.",
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
      },
      {
        id: 26,
        title: "Урок 26: Node.js основы.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить Node.js.",
      },
      {
        id: 27,
        title: "Урок 27: Express.js основы.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать Express сервер.",
      },
      {
        id: 28,
        title: "Урок 28: REST API.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать REST API.",
      },
      {
        id: 29,
        title: "Урок 29: Работа с файлами и JSON.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Работать с файлами.",
      },
      {
        id: 30,
        title: "Урок 30: Базы данных (SQLite / MongoDB).",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Настроить базу данных.",
      },
      {
        id: 31,
        title: "Урок 31: Подключение фронтенда и бэкенда.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Подключить frontend к backend.",
      },
      {
        id: 32,
        title: "Урок 32: Итоговый проект – Todo app с базой данных.",
        youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        homework: "Создать Todo app.",
      },
    ],
  },
];
