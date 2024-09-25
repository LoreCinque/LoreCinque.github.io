"use client";
import { brandData4 } from "@/data/Data";
import React from "react";
import { motion } from "framer-motion";

const BrandSection2 = () => {
  return (
    <div className="pc-brand5-area" data-bgcolor="#061319">
      <div className="container">
        <div className="pc-brand5-wrapper mtm-162">
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center overflow-hidden">
            {brandData4.map((item) => (
              <div className="col p-0" key={item.id}>
                <motion.div
                  className={`pc-brand5-single ${
                    brandData4.length === item.id ? "last-card" : ""
                  }`}
                  initial={{
                    y: 50,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 + 0.1 * item.id, ease: "easeIn" }}
                >
                  <h6 style={{ color: "white" }}>{item.description}</h6>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection2;
