'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ImageBadgeWrapper: React.FC = () => {
  const imageBadgeWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageBadgeWrapper = imageBadgeWrapperRef.current;

    if (imageBadgeWrapper) {
      const imageBadge = imageBadgeWrapper.querySelector('.image-badge');

      if (imageBadge) {
        const topics = imageBadge.cloneNode(true) as HTMLDivElement;
        imageBadgeWrapper.appendChild(topics);

        const tl = gsap.timeline({ repeat: -1 });

        tl.to(imageBadge, { x: -topics.offsetWidth, ease: 'linear', duration: 5, force3D: true, rotation: 0.01 });

        tl.to(topics, { x: -topics.offsetWidth, ease: 'linear', duration: 5, force3D: true, rotation: 0.01 }, 0);
      }
    }
  }, []);

  return (
    <div className="image-badge-wrapper" ref={imageBadgeWrapperRef}>
      <div className="image-badge">
        <span>Pearl Awards</span>
        <span>Webby Awards</span>
        <span>Lovie Award</span>
        <span>Digiday Award</span>
      </div>
    </div>
  );
};

export default ImageBadgeWrapper;



