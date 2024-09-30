"use client";
import React from "react";
import AboutTextSlider2 from "../slider/AboutTextSlider2";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const AboutSection8 = () => {
  return (
    <div className="pc-about5-area pt-120 pb-80" id="About">
      <div className="pc-aobut-right5-shape">
        <img src="img/about5-shape.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-xl-6 col-lg-6 order-1 order-lg-0"
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="pc-service-info-right mb-40">
              <h4 className="pc-about4-title text-white mb-25">
                <CustomGsapTextSplit>About Me</CustomGsapTextSplit>
              </h4>
              <CustomGsapTextSplit>
                <span className="pc-about-subtitle text-white">
                  I'm Lorenzo Sacchetti and Software Engineer
                </span>
              </CustomGsapTextSplit>

              <CustomGsapTextSplitLine className="text-white">
                Solutions-oriented developer with 8+ years of experience in
                designing, developing, launching, and maintaining web
                applications for diverse industries. Renowned for leading all
                aspects of website design and development projects,
                collecting/analyzing user requirements, producing top- notch
                code, creating mock-ups, and optimizing designs; drove a 30%
                increase in sales. Expertise in delivering maintainable
                web-based solutions and optimizing user-focused websites for
                customers by leveraging cutting-edge tools and methodologies.
              </CustomGsapTextSplitLine>

              <div className="pc-about-5-informations">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="pc-ab-info5-line-wrap mt-15">
                      <span className="pc-ab-info5-line">
                        <strong>Birthday:</strong> 10.05.1996
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>City:</strong> Zürich, Switzerland
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Degree:</strong> BS in Computer Science
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:lorenz.dev35@gmail.com">
                          lorenz.dev35@gmail.com
                        </a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Phone:</strong>{" "}
                        <a href="tel:+41-782-222-26-23">+41(0)782222623</a>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="pc-ab-info5-line-wrap mt-15">
                      <span className="pc-ab-info5-line">
                        <strong>Hobby:</strong> Deep Tech, Coding, D&D
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Facebook:</strong>{" "}
                        <a href="https://www.facebook.com/lorenzo.sacchetti.71/">
                          facebook.com/lorenzo.sacchetti.71
                        </a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Twitter:</strong>{" "}
                        <a href="https://x.com/ZarathustraFive/">
                          x.com/ZarathustraFive
                        </a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Linkedin:</strong>{" "}
                        <a href="https://www.linkedin.com/in/lorenz35/">
                          linkedin.com/in/lorenz35
                        </a>
                      </span>
                      <span className="pc-ab-info5-line">
                        <strong>Website:</strong>{" "}
                        <a href="https://lorenz35-portfolio.vercel.app/">
                          lorenz35-portfolio.vercel.app
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pc-about-info-inner-button mt-35">
                <a href="#" className="def-btn def-btn-5 btn-hover">
                  <span className="dot"></span>{" "}
                  <span className="txt">
                    Learn More <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-xl-6 col-lg-6 order-0 order-lg-1"
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="pc-about-right5-img ml-40 pl-40 mb-40">
              <div className="pc-about-right5-experience-wrapper">
                <AboutTextSlider2 />
              </div>
              <div className="pc-about-right5-image text-lg-end">
                <img src="img/about5.jpg" alt="img" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection8;
