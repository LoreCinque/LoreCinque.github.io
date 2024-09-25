"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
const AboutSection4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileView, setMobileView] = useState(false); // Use state to track mobile view

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

    // Calculate mobileView once on the client side
    const calculateMobileView = () => {
      setMobileView(window.innerWidth < 992);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", calculateMobileView);

    // Initial calculation
    calculateMobileView();

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }

      // Remove the event listener on component unmount
      window.removeEventListener("resize", calculateMobileView);
    };
  }, []);
  return (
    <section id="About">
      <div className="about-11 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4">
              <div className="img-wrap">
                <div className="part-img">
                  <div className="image-animation">
                    <motion.img
                      src="img/about-11.png"
                      className="image-animation-img"
                      alt="image"
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 }}
                    />
                  </div>
                  <motion.div
                    className="counter-box fade_bottom"
                    initial={{
                      x: mobileView ? 100 : 150,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: mobileView ? -180 : 100,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: "linear",
                    }}
                  >
                    <h3 className="counter-number">
                      <span className="counter">
                        {isVisible && (
                          <CountUp
                            start={1}
                            end={12}
                            duration={5}
                            formattingFn={(value) => `${value}+`}
                          />
                        )}
                      </span>
                    </h3>

                    <span className="counter-name">Experience</span>
                  </motion.div>
                </div>
                <motion.div
                  className="client-area fade_bottom"
                  initial={{
                    y: 60,
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
                  <span className="client-title">My Active Clients</span>
                  <div className="client-group">
                    <div className="img">
                      <img src="img/client_11-1.png" alt="image" />
                    </div>
                    <div className="img">
                      <img src="img/client_11-2.png" alt="image" />
                    </div>
                    <div className="img">
                      <img src="img/client_11-3.png" alt="image" />
                    </div>
                    <div className="img">
                      <img src="img/client_11-4.png" alt="image" />
                    </div>
                    <div className="img">
                      <img src="img/client_11-5.png" alt="image" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="col-lg-6"
              initial={{
                y: 60,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
              }}
            >
              <div className="about-txt">
                <h2 className="about-11-title title-anim">
                  <CustomGsapTextSplit>
                    Committed To Staying Up-To-Date
                  </CustomGsapTextSplit>
                </h2>
                <CustomGsapTextSplitLine className="about-11-dscr title-anim">
                  I am also dedicated to using the latest technology and tools
                  to streamline accounting processes and save clients time and
                  money.
                </CustomGsapTextSplitLine>
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="about-11-card">
                      <div className="part-icon fade_bottom">
                        <img src="img/about_11_card_icon.png" alt="Icon" />
                      </div>
                      <div className="part-txt title-anim">
                        <h3 className="about-11-card-title">Tax Forms</h3>
                        <p className="about-11-txt">Identifying Deductions</p>
                        <ul>
                          <li>
                            <i className="fa-regular fa-plus"></i> Such As 1040
                          </li>
                          <li>
                            <i className="fa-regular fa-plus"></i> W-2, And 1099
                            Forms
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="about-11-card">
                      <div className="part-icon fade_bottom">
                        <img src="img/about_11_card_icon.png" alt="Icon" />
                      </div>
                      <div className="part-txt title-anim">
                        <h3 className="about-11-card-title">Tax Forms</h3>
                        <p className="about-11-txt">Identifying Deductions</p>
                        <ul>
                          <li>
                            <i className="fa-regular fa-plus"></i> Such As 1040
                          </li>
                          <li>
                            <i className="fa-regular fa-plus"></i> W-2, And 1099
                            Forms
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="btn-box fade_bottom"
                  initial={{
                    x: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  <a href="#" className="def-btn def-btn-11 btn-hover">
                    <span className="dot"></span>
                    <span className="txt">Download CV</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection4;
