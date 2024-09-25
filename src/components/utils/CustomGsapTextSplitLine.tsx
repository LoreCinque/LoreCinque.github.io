"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { ReactNode, useEffect, useRef } from "react";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: ReactNode;
  className?: string;
};

const CustomGsapTextSplitLine = ({ children, className }: Props) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    if (!hasBeenVisible.current) {
      const animate = new SplitType(textRef.current!, { types: "words,lines" });
      gsap.from(animate.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
        },
      });
      hasBeenVisible.current = true;
    }
  }, []);

  return (
    <p className={className ? className : ""} ref={textRef}>
      {children}
    </p>
  );
};

export default CustomGsapTextSplitLine;
