"use client";
import React from "react";
import CountUp from "react-countup";
import AboutTextSlider from "../slider/AboutTextSlider";
import { motion } from "framer-motion";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
const AboutSection3 = () => {
  return (
    <section id="About">
      <div className="about-8 about-10">
        <div className="container">
          <div className="row align-items-center justify-content-between row-gap-lg-0 row-gap-5">
            <div className="col-lg-6">
              <div className="about-txt-10">
                <motion.div
                  className="section-heading-8 section-heading-10"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  viewport={{ once: true }}
                >
                  <h2 className="title-anim">
                    <CustomGsapTextSplit children="about me" />
                  </h2>
                </motion.div>

                <CustomGsapTextSplitLine className="title-anim">
                  I'm Brian Kevin a certified personal trainer and experienced
                  gym coach. With over 10 years of experience in the fitness
                  industry, John has a passion for helping people transform
                  their bodies and their lives. He has a Bachelor's degree in
                  Kinesiology and is certified through the National Academy of
                  Sports Medicine (NASM).
                </CustomGsapTextSplitLine>
                <CustomGsapTextSplitLine className="title-anim">
                  Brian has worked with a wide range of clients, from athletes
                  looking to improve their performance to seniors seeking to
                  maintain their independence and improve their overall health.
                  He takes a holistic approach to fitness, taking into account
                  his clients' physical abilities, goals, and lifestyles, and
                  creates personalized workout plans to help them achieve their
                  best results.
                </CustomGsapTextSplitLine>
                <motion.div
                  className="btn-box fade_bottom"
                  initial={{
                    y: -60,
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
                  <a href="#" className="def-btn btn-hover def-btn-10">
                    <span className="dot"></span>
                    <span className="txt">
                      Read More <i className="fa-regular fa-arrow-up-right"></i>
                    </span>
                  </a>
                </motion.div>
                <span className="name-vector">Brian Kevin</span>
              </div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="about-img-10"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                }}
              >
                <span className="svg-wrap">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <defs>
                      <path
                        id="circle"
                        d="
                        M 50, 50
                        m -40, 0
                        a 40,40 0 1,1 80,0
                        a 40,40 0 1,1 -80,0"
                      />
                    </defs>
                    <text>
                      <textPath xlinkHref="#circle" startOffset="0%">
                        FITNESS AND STRENGTH POWER. FITNESS AND STRENGTH POWER.
                      </textPath>
                    </text>
                  </svg>
                  <span className="counter">
                    <CountUp
                      start={1}
                      end={65}
                      duration={5}
                      formattingFn={(value) => `${value}K`}
                    />
                  </span>
                </span>
                <div className="img-wrap">
                  <div className="image-animation">
                    <motion.img
                      src="img/about-img-10.png"
                      className="image-animatio-img"
                      alt="image"
                      initial={{
                        scale: 1.2,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <AboutTextSlider />
    </section>
  );
};

export default AboutSection3;
