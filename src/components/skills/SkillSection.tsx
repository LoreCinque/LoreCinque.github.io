"use client";
import React from "react";
import CustomCircularProgressbar from "../utils/CustomCircularProgressbar";
import { skillData } from "@/data/Data";
import { motion } from "framer-motion";

type Props = {
  style: string;
  circleColor: string;
  textColor: string;
};
const SkillSection = ({ style, circleColor, textColor }: Props) => {
  return (
    <section>
      <div className={`progressbar-sec ${style}`}>
        <div className="container">
          <div className="progressbar">
            <div className="row g-4 justify-content-center">
              {skillData.slice(0, 4).map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                  <motion.div
                    className="box"
                    initial={{
                      y: 40,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.2 + 0.2 * item.id,
                      ease: "easeIn",
                    }}
                    viewport={{
                      once: true,
                    }}
                  >
                    <div className="chart">
                      <CustomCircularProgressbar
                        value={item.value}
                        circleColor={circleColor}
                        textColor={textColor}
                      />
                    </div>
                    <h2>{item.title}</h2>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
