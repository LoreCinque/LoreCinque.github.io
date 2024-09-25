"use client";
import React from "react";
import { motion } from "framer-motion";
import PortfolioBox from "./PortfolioBox";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
const PortfolioSection = () => {
  return (
    <section id="Portfolio">
      <div className="portfolio-8 portfolio-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-heading-8 section-heading-9 text-center">
                <motion.h6
                  className="pc-title-left"
                  initial={{
                    x: 40,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{ once: true }}
                >
                  Portfolio
                </motion.h6>
                <motion.h2
                  className="title-anim"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{ once: true }}
                >
                  <CustomGsapTextSplit children="My Work" />
                </motion.h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-between gap-lg-0 gap-6">
            <div className="col-lg-5">
              <PortfolioBox
                src="img/project/p9_1.png"
                projectName="Drama Serial"
                releaseDate="16 January, 2022"
              />
              <PortfolioBox
                src="img/project/p9_2.png"
                projectName="Theater Audition"
                releaseDate="18 March, 2022"
              />
              <BounceAnimatedBtn className="btn-bounce-whileInViewd d-flex">
                <a href="#" className="circle-btn btn-hover">
                  <span className="dot"></span>{" "}
                  <span className="txt">
                    View All <i className="fa-regular fa-arrow-up-right"></i>
                  </span>
                </a>
              </BounceAnimatedBtn>
            </div>
            <div className="col-lg-6">
              <PortfolioBox
                src="img/project/p9_3.png"
                projectName="Action Movie"
                releaseDate="24 September, 2022"
              />
              <PortfolioBox
                src="img/project/p9_4.png"
                projectName="Romantic Thriller"
                releaseDate="21 November, 2022"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
