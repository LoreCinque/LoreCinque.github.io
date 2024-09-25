"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import ContactForm4 from "../form/ContactForm4";
type Props = {
  style: string;
};
const ContactSection4 = ({ style }: Props) => {
  return (
    <div className={`${style} pc-contact-area pt-120 pb-80`} id="Contact">
      <div className="container">
        <div className="row">
          <motion.div
            className="col-xl-6 col-lg-6 mb-40"
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
            <div className="pc-contact-wrapper">
              <div className="section-heading">
                <h5 className="title-anim">
                  <CustomGsapTextSplit>Send Message</CustomGsapTextSplit>
                </h5>
                <h2 className="title-anim">
                  <CustomGsapTextSplit>Touch With Us</CustomGsapTextSplit>
                </h2>
              </div>
              <ContactForm4 />
            </div>
          </motion.div>
          <motion.div
            className="col-xl-6 col-lg-6 mb-40"
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
            <div className="pc-contact-map pl-50">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8041443003613!2d90.39871211540333!3d23.861087590454815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9884c556831%3A0xbf922ce212df4e67!2sSpeedDigit%20Software%20Solution!5e0!3m2!1sbn!2sbd!4v1671689433261!5m2!1sbn!2sbd"></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection4;
