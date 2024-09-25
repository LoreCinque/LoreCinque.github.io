"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {  
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-txt");
  
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
      <div className="why-choose-11">
        <div className="container">
          <div className="row justify-content-between align-items-center g-4">
            <div className="col-xl-5 col-lg-6">
              <div className="part-txt">
                <h2
                  className="why-choose-11-txt-title title-anim"
                >
                  <CustomGsapTextSplit>
                    Why Choose Me As An Accountant
                  </CustomGsapTextSplit>
                </h2>
                  <CustomGsapTextSplitLine className="why-choose-dscr title-anim">
                    There are many reasons why someone may choose to work with
                    an accountant.
                  </CustomGsapTextSplitLine>
                <motion.ul
                  className="reason-list fade_bottom"
                  initial={{
                    y: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}

                  transition={{
                    duration: 1.2,
                  }}
                >
                  <li>
                    <span className="part-icon">
                      <img src="img/why-choose-icon-1.png" alt="icon" />
                    </span>
                    <span className="part-txt pc-title-left">
                      <CustomGsapTextSplit>
                        24 Hour Customer Service
                      </CustomGsapTextSplit>
                    </span>
                  </li>
                  <li>
                    <span className="part-txt pc-title-left">
                      <CustomGsapTextSplit>
                        Expertise Of Accountant
                      </CustomGsapTextSplit>
                    </span>
                    <span className="part-icon">
                      <img src="img/why-choose-icon-2.png" alt="icon" />
                    </span>
                  </li>
                  <li>
                    <span className="part-icon">
                      <img src="img/why-choose-icon-3.png" alt="icon" />
                    </span>
                    <span className="part-txt pc-title-left">
                      <CustomGsapTextSplit>
                        Financial Planning
                      </CustomGsapTextSplit>
                    </span>
                  </li>
                </motion.ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-img-wrap fade_bottom">
                <div className="why-choose-img image-animation">
                  <motion.img
                    src="img/why-choose-img.png"
                    className="image-animation-img"
                    alt="Image"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}

                    transition={{ duration: 1.2 }}
                  />
                </div>
                  <motion.div 
                  className="counter-box"
                  initial={{
                    y: -80,
                    x: 80,
                    opacity: 0
                  }}
                  whileInView={{
                    y: 0,
                    x: 0,
                    opacity: 1
                  }}
                  viewport={{ once: true }}

                  transition={{
                    duration: 1.2
                  }}
                  >
                    <h2 className="counter-txt">
                      <span className="counter">
                      {isVisible && (
                          <CountUp
                            start={1}
                            end={241}
                            duration={5}
                            formattingFn={(value) => `${value}+ Project Done`}
                          />
                     )}   
                      </span>
                    </h2>
                  
                  </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
