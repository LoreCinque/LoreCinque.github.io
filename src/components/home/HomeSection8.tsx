'use client'
import React from "react";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
const HomeSection8 = () => {
  return (
    <section id="Home">
      <div className="banner bg-cover" data-background="img/hero_bg.jpg">
        <div className="animated-shape shape-1 clr-main3">
          <div className="layer-1"></div>
          <div className="layer-2"></div>
          <div className="layer-3"></div>
          <div className="layer-4"></div>
          <div className="layer-5"></div>
        </div>
        <div className="container">
          <div className="row justify-content-between align-items-end">
            <div className="col-lg-7 col-md-9">
              <div className="banner-text-sec banner-3-padding">
                <div className="banner-text-area">
                  <div className="text-anim">
                    <CustomGsapTextSplitLine className="wellcome ">
                      I’m Olivia, Web Designer & Developer
                    </CustomGsapTextSplitLine>
                  </div>
                  <h1 className="banner-heading">
                    <CustomGsapTextSplit>
                        <span className="pc-title-left">
                        An Expert Digital Marketing
                        </span>
                        <br />{" "}
                        <span className="pc-title-right">Product Designer</span>   
                    </CustomGsapTextSplit>
                    
                  </h1>
                  <div className="text-anim">
                    <CustomGsapTextSplitLine className="banner-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmo tempor incididunt ut labore et dolore magna
                      aliqua.
                    </CustomGsapTextSplitLine>
                  </div>
                  <motion.div 
                    className="banner-btn"
                    initial={{
                    y: 50,
                    opacity: 0
                    }}
                    whileInView={{
                    y: 0,
                    opacity: 1
                    }}
                    viewport={{once: true}}
                    transition={{duration:1.2}}
                  >
                    <a href="#" className="def-btn btn-hover def-btnrd">
                      <span className="dot"></span>{" "}
                      <span className="txt">
                        Download CV <i className="fa-solid fa-download"></i>
                      </span>
                    </a>
                    <a href="#" className="about-btn">
                      My Works
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection8;
