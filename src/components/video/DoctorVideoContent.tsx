"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
const DoctorVideoContent = () => {
  return (
    <>
      <CustomGsapTextSplit>
        <span className="pc-price-subtitle">
          All-Inclusive Developer Package
        </span>
      </CustomGsapTextSplit>

      <h2 className="pc-price-title">
        <CustomGsapTextSplit>Software Engineering services</CustomGsapTextSplit>
      </h2>
      <CustomGsapTextSplit>
        <span className="pc-pricing-rate">
          From <span className="pc-pricing-text">$50.00</span> Per Hour
        </span>
      </CustomGsapTextSplit>
      <motion.div
        className="pc-price-button mt-25"
        initial={{
          y: 60,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
      >
        <a href="#Service" className="def-btn def-btn-6 btn-hover">
          <span className="dot"></span>{" "}
          <span className="txt">
            All Services <i className="fa-solid fa-arrow-right-long"></i>
          </span>
        </a>
      </motion.div>
    </>
  );
};

export default DoctorVideoContent;
