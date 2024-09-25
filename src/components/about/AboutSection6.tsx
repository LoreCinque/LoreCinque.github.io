"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";
const AboutSection6 = () => {
  return (
    <section id="About">
      <div className="project-wrapper about-2">
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-md-5"
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
              <div className="project-image">
                <img
                  src="img/about-img-2.jpg"
                  alt="Image"
                  className="project-img"
                />
                <div className="animate">
                  <img src="img/about-frame-2.png" alt="frame" />
                </div>
              </div>
            </motion.div>
            <motion.div
              className=" col-md-7"
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
              <div className="project-content">
                <div className="section-heading section-heading-2">
                  <h5 className="title-anim">
                    <CustomGsapTextSplit children="I'm a Designer" />
                  </h5>
                  <h2 className="title-anim">
                    <CustomGsapTextSplit children="I Can Design Anything You Want" />
                  </h2>
                </div>
                <div className="text-anim">
                  <CustomGsapTextSplitLine className="first">
                    Nunc eu augue at nunc consectetur venenatis sit amet sodales
                    metus. Sed at gravida nisi, mattis lacinia ipsum.
                    Pellentesque suscipit odio quis ligula maximus aliquet.
                    Integer cursus ipsum et posuere ornare.
                  </CustomGsapTextSplitLine>
                  <CustomGsapTextSplitLine>
                    We provide marketing services to startups and small
                    businesses to looking for a partner of their digital media,
                    design & development, lead generation and communications
                    requirents.We work with you, not for you.
                  </CustomGsapTextSplitLine>
                </div>
                <div className="project-btn">
                  <a
                    href="#"
                    className="def-btn def-btn-2 btn-hover btn-bounce-animated"
                  >
                    <span className="dot"></span>{" "}
                    <span className="txt">Learn More</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection6;
