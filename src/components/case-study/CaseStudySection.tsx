"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
import { caseStudyData } from "@/data/Data";
import { useAppDispatch } from "@/redux/hooks";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
const CaseStudySection = () => {
  const dispatch = useAppDispatch();
  return (
    <section id="Portfolio">
      <div className="case-study-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-heading-11 text-center">
                <h2 className="title-anim">
                  <CustomGsapTextSplit>
                    View My Professional Case Study
                  </CustomGsapTextSplit>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center justify-content-sm-start">
            {caseStudyData.map((item) => {
              const openLightbox = () => {
                dispatch(toggleLightboxOpen(item.img));
              };
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 col-8" key={item.id}>
                  <motion.div
                    className="case-study-card fade_bottom"
                    initial={{
                      y: 60,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 + 0.2 * item.id }}
                  >
                    <div
                      className="part-img"
                      role="button"
                      onClick={openLightbox}
                    >
                      <img src={item.img} alt="image" />
                    </div>
                    <div className="part-txt">
                      <a role="button" onClick={openLightbox}>
                        {item.text}{" "}
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </a>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
