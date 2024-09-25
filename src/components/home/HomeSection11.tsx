"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const HomeSection11 = () => {
  return (
    <section id="Home">
      <div className="banner main-clr6" data-bgcolor="#061319">
        <div className="container">
          <div className="pc-banner-wrapp-clr main-banner-clr6">
            <div className="row justify-content-between align-items-end">
              <motion.div
                className="col-lg-6 col-md-10"
                initial={{
                  x: -60,
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
                        <p className="wellcome ">Markets & Resources</p>
                      </CustomGsapTextSplit>
                    </div>
                    <h1 className="banner-heading">
                      <CustomGsapTextSplit>
                        <span className="pc-title-left">
                          Find The Best Doctor{" "}
                        </span>
                        <br />{" "}
                        <span className="pc-title-right">Near By You</span>
                      </CustomGsapTextSplit>
                    </h1>
                    <CustomGsapTextSplitLine className="banner-description title-anim">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Blanditiis non a tempora! sit omnis distinctio? dfsff
                      dfsafsf amr ilsore karoem
                    </CustomGsapTextSplitLine>
                    <div className="banner-btn">
                      <a href="#" className="def-btn def-btn-6 btn-hover">
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
                className="col-lg-6 d-none d-lg-block"
                initial={{
                  x: 60,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <div className="pc-banner-img text-end">
                  <img src="img/hero_doctor.png" alt="img" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection11;
