'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="border-b border-[#E4E4E4]">
      <div className="flex items-center justify-between w-[75%] m-auto h-[80px]">
        <h2 className="text-[24px] text-[#0E0E0E]">Computer Science</h2>
        <a
          href="https://t.me/aibarerzhuman" // Replace with your actual Telegram channel link
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#fff] no-underline px-[25px] py-[10px] rounded-full bg-[#141414] font-[700]"
        >
          Поддержка
        </a>
      </div>  
    </nav>
  );
};
