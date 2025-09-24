'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function GSAPExample() {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Animate the box
    if (boxRef.current) {
      gsap.fromTo(boxRef.current,
        {
          x: -100,
          opacity: 0,
          rotation: -180
        },
        {
          x: 0,
          opacity: 1,
          rotation: 0,
          duration: 1.5,
          ease: "back.out(1.7)"
        }
      );
    }

    // Animate the text
    if (textRef.current) {
      gsap.fromTo(textRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power2.out"
        }
      );
    }

    // Continuous rotation animation
    gsap.to(boxRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <h1 ref={textRef} className="text-4xl font-bold text-blue-600">
        GSAP is Connected! 🎉
      </h1>

      <div
        ref={boxRef}
        className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold text-xl"
      >
        GSAP
      </div>

      <p className="text-center text-gray-600 max-w-md">
        This box is animated with GSAP! It slides in from the left, fades in,
        rotates, and then continuously spins. GSAP is now successfully integrated
        into your Next.js project.
      </p>
    </div>
  );
}
