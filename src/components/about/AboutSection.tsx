"use client";
import { motion } from "framer-motion";
import React from "react";
import AboutTab from "./AboutTab";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";

const AboutSection = () => {
  return (
    <section id="About">
      <div className="about about-8 about-9 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row gap-5 gap-lg-0">
            <div className="col-lg-6 col-md-12">
              <div className="row d-flex align-items-end">
                <motion.div
                  className="col-lg-2 col-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="vertical-title fade_bottom">About Me</h2>
                </motion.div>
                <div className="col-lg-10 col-10">
                  <div className="about-img-9">
                    <div className="image-animation">
                      <motion.img
                        src="img/about-9.png"
                        className="image-animation-img"
                        alt="image"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-txt text-anim">
                <div className="section-heading-8 section-heading-9">
                  <motion.h6
                    className="pc-title-left"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  >
                    About
                  </motion.h6>
                  <motion.h2
                    className="title-anim"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                  >
                    <CustomGsapTextSplit>
                      <span className="d-block">Ava Elizabeth:</span>Legend Of
                      Hollywood
                    </CustomGsapTextSplit>
                  </motion.h2>
                </div>
                <AboutTab />
                <BounceAnimatedBtn className="btn-bounce-animated">
                  <a href="#" className="circle-btn btn-hover">
                    <span className="dot"></span>{" "}
                    <span className="txt">
                      Hire Me <i className="fa-regular fa-arrow-up-right"></i>
                    </span>
                  </a>
                </BounceAnimatedBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
