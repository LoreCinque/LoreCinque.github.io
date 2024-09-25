"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";
const HomeSection9 = () => {
  return (
    <section id="Home">
      <div
        className="homepage-9-home banner bg-cover"
        data-background="img/herobg.jpg"
        data-bgcolor="#000000"
      >
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <motion.div
              className="col-lg-7 col-md-9"
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
              <div className="banner-text-sec banner-4-padding pr-50">
                <div className="banner-text-area">
                  <div className="text-anim">
                    <CustomGsapTextSplit>
                      <p className="wellcome ">Professional Photographer</p>
                    </CustomGsapTextSplit>
                  </div>
                  <h1 className="banner-heading">
                    <CustomGsapTextSplit>
                      <span className="pc-title-left">
                        Excelence Photos That
                      </span>
                      <br /> <span className="pc-title-right">Are Admired</span>
                    </CustomGsapTextSplit>
                  </h1>
                  <div className="text-anim">
                    <CustomGsapTextSplitLine className="banner-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis non a tempora! sit omnis distinctio? dfsff
                      dfsafsf amr ilsore karoem
                    </CustomGsapTextSplitLine>
                  </div>
                  <div className="banner-btn">
                    <a href="#" className="def-btn def-btn-4 btn-hover">
                      <span className="dot"></span>{" "}
                      <span className="txt">Download CV</span>{" "}
                      <i className="fa-solid fa-download"></i>
                    </a>
                    <a href="#" className="about-btn">
                      About Me
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-5 d-none d-lg-block"
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
              <div className="pc-banner-img">
                <img src="img/heroimg.png" alt="img" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection9;
