"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import ContactForm3 from "../form/ContactForm3";

type Props = {
  style: string;
  headingStyle: string;
  img: string;
  btnStyle: string;
  btnCentered?: boolean;
};

const ContactSection3 = ({
  style,
  headingStyle,
  img,
  btnStyle,
  btnCentered,
}: Props) => {
  return (
    <section className={style} id="Contact">
      <div className="container">
        <div className="row align-items-center g-4">
          <motion.div
            className="col-xl-6 col-lg-5"
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
          >
            <div className="part-image">
              <img src={img} alt="" />
            </div>
          </motion.div>
          <motion.div
            className="col-xl-6 col-lg-7"
            initial={{
              x: 100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
          >
            <div className={`section-heading ${headingStyle}`}>
              <h5>
                <CustomGsapTextSplit children="contact" />
              </h5>
              <h2>
                <CustomGsapTextSplit children="Get In Touch With Me" />
              </h2>
            </div>
            <ContactForm3 btnStyle={btnStyle} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection3;
