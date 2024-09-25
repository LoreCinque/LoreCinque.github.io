"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";

const AboutSection2 = () => {
  return (
    <section id="About">
      <div className="about about-8">
        <div className="container">
          <div className="row justify-content-between row-gap-5 row-gap-md-0">
            <div className="col-xl-5 col-lg-6 col-md-5">
              <div className="about-img">
                <div className="image-animation">
                  <motion.img
                    src="img/about-img-8.png"
                    className="image-animation-img"
                    alt="image"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeIn" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7">
              <div className="about-txt text-anim">
                <div className="section-heading-8">
                  <motion.h6
                    className="pc-title-left"
                    initial={{
                      x: 80,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    viewport={{ once: true }}
                  >
                    About
                  </motion.h6>
                  <motion.h2
                    className="title-anim"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <CustomGsapTextSplit children="About Me" />
                  </motion.h2>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  viewport={{ once: true }}
                >
                  <CustomGsapTextSplitLine>
                    Hi, my name is David James. I am a professional content
                    writer with a passion for creating engaging and informative
                    written content. With 9 years of experience in the field, I
                    have honed my skills in researching and presenting
                    information in a clear and concise manner, while still
                    capturing the reader's attention.
                  </CustomGsapTextSplitLine>
                </motion.div>

                <motion.ul
                  className="title-anim"
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  viewport={{ once: true }}
                >
                  <li>
                    <span>
                      <i className="fa-light fa-plus"></i>
                    </span>{" "}
                    Excellent writing and editing
                  </li>
                  <li>
                    <span>
                      <i className="fa-light fa-plus"></i>
                    </span>{" "}
                    Ability to write for different platforms
                  </li>
                  <li>
                    <span>
                      <i className="fa-light fa-plus"></i>
                    </span>{" "}
                    Excellent understanding of grammar
                  </li>
                  <li>
                    <span>
                      <i className="fa-light fa-plus"></i>
                    </span>{" "}
                    Ability to work within tight deadlines
                  </li>
                </motion.ul>
                <BounceAnimatedBtn className="btn-bounce-animated">
                  <a href="#" className="circle-btn btn-hover">
                    <span className="dot"></span>{" "}
                    <span className="txt">
                      Contact Me{" "}
                      <i className="fa-regular fa-arrow-up-right"></i>
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

export default AboutSection2;
