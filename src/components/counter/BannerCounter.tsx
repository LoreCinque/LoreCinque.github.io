"use client";
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const BannerCounter = () => {

  return (
    <div className="banner-11-counter fade_bottom">
      <motion.div
        className="row"
        initial={{
          y: -60,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}

        transition={{ duration: 1.2 }}
      >
        <div className="col-4">
          <h3 className="counter-number">
            <span className="counter">
                <CountUp
                  start={1}
                  end={214}
                  duration={5}
                  formattingFn={(value) => `${value}+`}
                />
            </span>
          </h3>
          <p className="counter-name">Project Done</p>
        </div>

        <div className="col-4">
          <h3 className="counter-number">
            <span className="counter">
                <CountUp
                  start={1}
                  end={142}
                  duration={5}
                  formattingFn={(value) => `${value}+`}
                />
            </span>
          </h3>
          <p className="counter-name">Happy Clients</p>
        </div>

        <div className="col-4">
          <h3 className="counter-number">
            <span className="counter">
                <CountUp
                  start={1}
                  end={21}
                  duration={5}
                  formattingFn={(value) => `${value}+`}
                />
            </span>
          </h3>
          <p className="counter-name">Award Win</p>
        </div>
      </motion.div>
    </div>
  );
};

export default BannerCounter;
