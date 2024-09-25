"use client";
import React from "react";
import PortfolioComponent from "./PortfolioComponent";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";

const PortfolioSection2 = () => {
  return (
    <section id="Portfolio">
      <div className="portfolio-8 home-2-portfolio">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <motion.div
                className="section-heading-8 text-center"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <h6 className="pc-title-left">Portfolio</h6>
                <h2 className="title-anim">
                  <CustomGsapTextSplit children="Creative Work" />
                </h2>
              </motion.div>
            </div>
          </div>
          <PortfolioComponent />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection2;
