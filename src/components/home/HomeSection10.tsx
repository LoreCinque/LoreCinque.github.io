"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const HomeSection10 = () => {
  return (
    <section id="Home">
      <div className="banner main-clr5" data-bgcolor="#061319">
        <div className="container">
          <div className="pc-banner-wrapp-clr">
            <div className="row justify-content-between align-items-center">
              <motion.div
                className="col-lg-5 d-none d-lg-block"
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <div className="pc-banner-img pr-50">
                  <img src="img/owner/Lorenzo_Sacchetti.png" alt="img" />
                </div>
              </motion.div>
              <motion.div
                className="col-lg-7 col-md-10"
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <div className="banner-text-sec banner-4-padding">
                  <div className="banner-text-area">
                    <div className="text-anim">
                      <CustomGsapTextSplit>
                        <p className="wellcome ">Lorenzo Sacchetti</p>
                      </CustomGsapTextSplit>
                    </div>
                    <h1 className="banner-heading">
                      <CustomGsapTextSplit>
                        <span className="pc-title-left">
                          I'm a Senior Full-Stack{" "}
                        </span>
                        <br /> <span className="pc-title-right">Developer</span>
                      </CustomGsapTextSplit>
                    </h1>
                    <CustomGsapTextSplitLine className="banner-description title-anim">
                      “Science wins when its wing are unhinibited with
                      imagnation” - Michael Faraday
                      <br />
                      I'm a solutions-oriented developer with 8+ years of
                      experience in designing, developing, launching, and
                      maintaining web applications for diverse industries.
                    </CustomGsapTextSplitLine>
                    <div className="banner-btn">
                      <a
                        href="https://drive.google.com/file/d/101WrO7fXdEpS3oIkq_MehFrFE7HStk7H/view?usp=sharing"
                        className="def-btn def-btn-5 btn-hover"
                      >
                        <span className="dot"></span>{" "}
                        <span className="txt">Resume</span>{" "}
                        <i className="fa-solid fa-download"></i>
                      </a>
                      <a href="#" className="about-btn">
                        About Me
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection10;
