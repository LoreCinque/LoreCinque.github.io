'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);

  const mousemoveHandler = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: mousePosition.x,
          y: mousePosition.y,
        },
      });

      // Main Cursor Moving
      tl.to(circle1.current, {
        ease: 'power2.out',
      }).to(circle2.current, {
        ease: 'power2.out',
      }, '-=0.4');
    } catch (error) {
      console.log(error);
    }
  }, [mousePosition]);

  useEffect(() => {
    document.addEventListener('mousemove', mousemoveHandler);

    return () => {
      document.removeEventListener('mousemove', mousemoveHandler);
    };
  }, []);

  return (
    <div>
      <div className="cursor1" ref={circle1}></div>
      <div className="cursor2" ref={circle2}></div>
    </div>
  );
};

export default CustomCursor;

