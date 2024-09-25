import React from "react";
import CustomProgressbar from "../utils/CustomProgressbar";
import {motion} from 'framer-motion'
const SkillTabPane = () => {
  return (
    <motion.div 
    className="skill-tab-pane-container"
    initial={{
      y: 40,
      opacity: 0
    }}
    whileInView={{
        y:0,
        opacity: 1
    }}
    viewport={{once: true}}

    transition={{duration:1.2}}
    >
      <div className="progress-box">
        <span className="progress-txt">Modeling</span>
        <CustomProgressbar value={80}/>
      </div>
      <div className="progress-box">
        <span className="progress-txt">Anchoring</span>
        <CustomProgressbar value={90}/>
      </div>
      <div className="progress-box">
        <span className="progress-txt">Memorization</span>
        <CustomProgressbar value={70}/>
      </div>
      <div className="progress-box">
        <span className="progress-txt">Improvisation</span>
        <CustomProgressbar value={95}/>
      </div>
    </motion.div>
  );
};

export default SkillTabPane;
