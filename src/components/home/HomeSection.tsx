"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BannerBottom from "./BannerBottom";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";

const HomeSection = () => {
  return (
    <section id="Home">
      <div className="banner banner-8 banner-9">
        <div className="container-sm">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-9 col-12">
              <div className="banner-txt">
                <div className="banner-heading">
                  <motion.h4
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
                    className="pc-title-left"
                  >
                    Actor & Model
                  </motion.h4>
                  <h1 className="title-anim">
                    <CustomGsapTextSplit children="Ava Elizabeth" />
                  </h1>
                </div>
                <motion.div
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
                  className="row align-items-center"
                >
                  <div className="col-sm-9">
                    <CustomGsapTextSplitLine className="title-anim">
                      As a versatile actor with a passion for storytelling, Ava
                      Elizabeth has captivated audiences with their dynamic
                      performances on both stage and screen.
                    </CustomGsapTextSplitLine>
                  </div>
                  <div className="col-sm-3">
                    <div className="d-flex justify-content-sm-center justify-content-end fade_bottom">
                      <img src="img/award.png" alt="Icon" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <BannerBottom href="#service" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
