"use client";
import React, { useRef, useEffect } from "react";

type Props = {
  value: number;
  circleColor: string;
  textColor: string;
};

const CustomCircularProgressbar = ({
  value,
  circleColor,
  textColor,
}: Props) => {
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const fillValue = circumference - (value / 100) * circumference;

  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circleStyle = circleRef.current?.style as any; // Cast to 'any'
          circleStyle.transition = `stroke-dashoffset 1.5s ease-in-out`;
          circleStyle.strokeDashoffset = `${fillValue}`;
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [fillValue]);

  return (
    <div className="circular-progress-bar-container" ref={containerRef}>
      <svg className="about-skill-circular-progress-bar" viewBox="0 0 220 220">
        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="lightgrey"
          strokeWidth="20"
          strokeDasharray={circumference}
          fill="transparent"
        />
        <circle
          ref={circleRef}
          cx="110"
          cy="110"
          r={radius}
          stroke={circleColor}
          strokeWidth="20"
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: `${circumference}` }}
        />
        <circle cx="110" cy="110" r={radius - 20} fill="transparent" />
        <text
          x="110"
          y="110"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="35"
          fill={textColor}
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default CustomCircularProgressbar;
