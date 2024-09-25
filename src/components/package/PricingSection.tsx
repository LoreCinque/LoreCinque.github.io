import { packageData } from "@/data/Data";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";
const PricingSection = () => {
  return (
    <div className="pricing-cards fade_left">
      {packageData.map((item) => (
        <motion.div 
        className="pricing-card fade_left_item" 
        key={item.id}
        initial={{
            x: 100,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{once: true}}
        transition={{
            duration: 1.2 + 0.2 * item.id,
            ease: 'easeIn'
        }}
        >
          <div className="plan-types">
            <ul>
              <li>
                <input
                  type="radio"
                  className="plan-type"
                  name="plan-type"
                  id="pricing_0_1"
                />
                <label htmlFor="pricing_0_1">{item.package}</label>
              </li>
              <li>
                <input
                  type="radio"
                  className="plan-type"
                  name="plan-type"
                  id="pricing_0_2"
                />
                <label htmlFor="pricing_0_2">7 Day Free Trial</label>
              </li>
            </ul>
            <div className="price">
              $<span>{item.price}.00</span>
            </div>
          </div>
          <div className="plan-txt">
            <h3 className="plan-title">
                <CustomGsapTextSplit children={item.title} />   
            </h3>
            <CustomGsapTextSplitLine children={item.desc} />
          </div>
        </motion.div>
      ))}

      <motion.a 
      href="#" 
      className="def-btn btn-hover fade_left_item def-btn-10"
      initial={{
        x: 100,
        opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{once: true}}
        transition={{
            duration: 1.5,
            ease: 'easeIn'
        }}
      >
        <span className="dot"></span>
        <span className="txt">
          Purchase <i className="fa-regular fa-arrow-up-right"></i>
        </span>
      </motion.a>
    </div>
  );
};

export default PricingSection;
