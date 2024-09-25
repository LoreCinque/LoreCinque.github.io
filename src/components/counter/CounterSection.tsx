"use client";
import { counterData } from "@/data/Data";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

type Props = {
  style: string;
  darkTheme?: boolean;
  bgImg?: string;
  bgShape?: string;
};
const CounterSection = ({ style, darkTheme, bgImg, bgShape }: Props) => {
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
    <section>
      <div className={`review-sec ${style}`}>
        {bgImg || bgShape ? (
          <div
            className={
              (bgImg && "pc-review-wrapper-bg-img") ||
              (bgShape && "pc-review-left-shape") ||
              ""
            }
          >
            <img src={bgImg ? bgImg : bgShape} alt="img" />
          </div>
        ) : (
          <div className="animated-shape shape-white">
            <div className="layer-1"></div>
            <div className="layer-2"></div>
            <div className="layer-3"></div>
            <div className="layer-4"></div>
            <div className="layer-5"></div>
          </div>
        )}
        <div className="container">
          <div className="row g-4">
            {counterData.map((item) => (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <motion.div
                  className="review-content counter-box"
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2 + 0.2 * item.id,
                    ease: "easeIn",
                  }}
                  viewport={{ once: true }}
                >
                  <div className="review-icon">
                    <img
                      src={darkTheme ? item.imgSrc : item.lightImg}
                      alt="icon"
                    />
                  </div>
                  <span className="counter">
                    {isVisible && (
                      <CountUp start={1} end={item.value} duration={5} />
                    )}
                  </span>
                  <h6 className="review-desp">{item.title}</h6>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
