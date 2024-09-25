"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { brandData } from "@/data/Data";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";

const BrandSection = () => {
  return (
    <section>
      <div className="brand-9 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="section-heading-8 section-heading-9 mb-0">
                <motion.h6
                  className="pc-title-left"
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{ once: true }}
                >
                  Brand
                </motion.h6>
                <motion.h2
                  className="title-anim"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <CustomGsapTextSplit children="Worked With Largest Brands" />
                </motion.h2>
                <motion.div
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
                    As a versatile actor with a passion for storytelling, Ava
                    Elizabeth has captivated audiences with their dynamic
                    performances.
                  </CustomGsapTextSplitLine>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-7">
              <motion.div
                className="all-brands"
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
                {brandData.map((item, index) => (
                  <div className="single-brand title-anim" key={index}>
                    <a href="#">
                      <motion.img
                        src={item.img}
                        alt="brand logo"
                        initial={{
                          y: -40,
                          opacity: 0,
                        }}
                        whileInView={{
                          y: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 1.5 + 0.2 * index,
                        }}
                        viewport={{ once: true }}
                      />
                    </a>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
