"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { trainingProgramData } from "@/data/Data";
import { useAppDispatch } from "@/redux/hooks";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
const TrainingProgram = () => {
  const dispatch = useAppDispatch();
  return (
    <section>
      <div className="training-program-10 bg-dark bg-opacity-25">
        <div className="container">
          <div className="section-heading-8 section-heading-10">
            <div className="row align-items-center row-gap-lg-0 row-gap-5 ">
              <motion.div
                className="col-lg-6"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
              >
                <h2 className="title-anim">
                  <CustomGsapTextSplit children="my training programs" />
                </h2>
              </motion.div>
              <motion.div
                className="col-xl-4 col-lg-6"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
              >
                <CustomGsapTextSplitLine className="title-txt title-anim">
                  Aerobics is a form of cardiovascular exercise that involves a
                  combination of rhythmic movements, dance-like steps, and
                  repetitive motions that are performed to music. It is designed
                  to increase the heart rate.
                </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
          <div className="training-program-row-wrap">
            <div className="training-program-row">
              {trainingProgramData.map((item) => {
                const openLightbox = () => {
                  dispatch(toggleLightboxOpen(item.img));
                };
                return (
                  <div
                    className="training-program-col fade_bottom"
                    key={item.id}
                  >
                    <div className="single-program-box">
                      <motion.div
                        className="part-txt title-anim"
                        initial={{
                          x: -30,
                          opacity: 0,
                        }}
                        whileInView={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1 + 0.2 * item.id,
                        }}
                        viewport={{ once: true }}
                      >
                        <h3 className="program-title">
                          <CustomGsapTextSplit children={item.title} />{" "}
                          <span>0{item.id}</span>
                        </h3>
                        <div className="row align-items-center">
                          <div className="col-9">
                            <CustomGsapTextSplitLine>
                              Aerobics is a form of cardiovascular exercise that
                              involves a combination of rhythmic movements.
                            </CustomGsapTextSplitLine>
                          </div>
                          <div className="col-3">
                            <a href="#" className="view-btn">
                              <i className="fa-light fa-arrow-down-right"></i>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="part-img"
                        initial={{
                          x: 50,
                          opacity: 0,
                        }}
                        whileInView={{
                          x: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1.2 + 0.2 * item.id,
                        }}
                        viewport={{ once: true }}
                      >
                        <a role="button" onClick={openLightbox}>
                          <img src={item.img} alt="image" />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <motion.div
            initial={{
              x: -80,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
            className="section-btn-10 justify-content-center fade_bottom"
          >
            <a href="#" className="def-btn btn-hover def-btn-10">
              <span className="dot"></span>
              <span className="txt">
                View All <i className="fa-regular fa-arrow-up-right"></i>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingProgram;
