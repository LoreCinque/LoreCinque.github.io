import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";

const MyselfTabPane = () => {
  return (
    <>
    <motion.div
     initial={{ y: 20, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1 }}
     viewport={{once: true}}
     transition={{ duration: 1.5 }}
    >
      <CustomGsapTextSplitLine>
          I'm Ava Elizabeth with excellence in the film industry. With your career
          spanning over four decades, Hanks has established himself as a versatile
          actor and one of the greatest of all time. From his early days in
          comedies.
      </CustomGsapTextSplitLine>
    </motion.div>
      
      <motion.div
        className="row"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{once: true}}

      >
        <div className="col-6">
          <span className="about-9-subtitle title-anim">Follow Me:</span>
          <div className="social">
            <a href="#" className="title-anim">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="title-anim">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#" className="title-anim">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="title-anim">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <span className="about-9-subtitle title-anim">Contact Me:</span>
          <div className="about-9-contact title-anim">
            <a href="tel:+1141222335">(+1) 141 222 335</a>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MyselfTabPane;
