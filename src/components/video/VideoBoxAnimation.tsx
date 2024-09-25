'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import BounceAnimatedBtn from '../utils/BounceAnimatedBtn'
import { useAppDispatch } from '@/redux/hooks'
import { toggleVideoModalOpen } from '@/redux/features/videoModalSlice'
const VideoBoxAnimation = () => {
    const dispatch = useAppDispatch();
    const openVideoModal = () => {
      dispatch(toggleVideoModalOpen());
    };
    const [isVisible, setIsVisible] = useState(false);
    const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    };
  
    const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  
    useEffect(() => {
      const targetElement = document.querySelector(".counter-box");
    
      if (targetElement) {
        intersectionObserverRef.current = new IntersectionObserver(
          onVisibilityChange,
          {
            threshold: 0.5,
          }
        );
    
        intersectionObserverRef.current.observe(targetElement);
      }
    
      return () => {
        if (intersectionObserverRef.current) {
          intersectionObserverRef.current.disconnect();
        }
      };
    }, []);
  return (
    <div className="video-box video-box-animation">
    <motion.img 
    src="img/video-bg.png" 
    alt="Image" 
    initial={{
        scale: 1.2
    }}
    whileInView={{
        scale: 1
    }}
    transition={{duration: 1.5}}
    />
    <motion.div
      className="counter-box"
      initial={{
        y: -60,
        x: -60,
      }}
      whileInView={{
        y: 0,
        x: 0,
      }}
      viewport={{once: true}}
      transition={{
        duration: 1.2,
      }}
    >
        <h2>
          <span className="counter">
            {isVisible && (
              <CountUp
                start={1}
                end={23}
                duration={5}
                formattingFn={(value) => `${value}K`}
              />
            )}
          </span>
        </h2>
      <p>Project Done</p>
    </motion.div>
    <div className="btn-box">
      <BounceAnimatedBtn className="btn-bounce-animated">
        <a
          role="button"
          className="circle-btn btn-hover play-btn"
          onClick={openVideoModal}
        >
          <span className="dot"></span>{" "}
          <span className="txt">
            <i className="fa-thin fa-play"></i>
          </span>
        </a>
      </BounceAnimatedBtn>
    </div>
  </div>
  )
}

export default VideoBoxAnimation