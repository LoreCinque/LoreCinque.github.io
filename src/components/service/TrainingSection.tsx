"use client";
import { serviceData3 } from "@/data/Data";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
const TrainingSection = () => {
  return (
    <section id="Service">
      <div className="formula-10 bg-dark bg-opacity-25">
        <div className="container">
          <div className="section-heading-8 section-heading-10">
            <div className="row align-items-center gy-5">
              <motion.div
                className="col-md-6 col-12"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                }}
              >
                <h2 className="title-anim">
                  <CustomGsapTextSplit children="my training Formula" />
                </h2>
              </motion.div>
              <motion.div
                className="col-xl-4 col-md-6 col-12"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                }}
              >
                <CustomGsapTextSplitLine
                  children="Aerobics is a form of cardiovascular exercise that
                    involves a combination of rhythmic movements,
                    dance-like steps, and repetitive motions that are
                    performed to music."
                  className="title-txt title-anim"
                />
              </motion.div>
            </div>
          </div>
          <div className="row fade_bottom gy-4 gy-sm-5">
            {serviceData3.map((item) => (
              <div className="col-md-3 col-6" key={item.id}>
                <div className="formula-card">
                  <motion.div
                    className="formula-card-img"
                    initial={{
                      y: -40,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2 + item.id * 0.2,
                      ease: "easeIn",
                    }}
                  >
                    <a href="#">
                      <img src={item.img} alt="image" />
                    </a>
                  </motion.div>
                  <motion.h3
                    className="formula-card-title title-anim"
                    initial={{
                      x: 30,
                      opacity: 0,
                    }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5 + item.id * 0.2,
                    }}
                  >
                    <a href="#">{item.title}</a>
                  </motion.h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
