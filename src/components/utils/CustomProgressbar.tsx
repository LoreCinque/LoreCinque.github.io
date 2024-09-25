"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  value: number;
};

const CustomProgressbar = ({ value }: Props) => {
  return (
    <div className="progress-bar-container">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="about-skill-progress-bar"
        viewport={{ once: true }}
      />
    </div>
  );
};

export default CustomProgressbar;
