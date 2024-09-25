"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import ContactForm from "../form/ContactForm";
const ContactSection = () => {
  return (
    <section id="Contact">
      <div className="contact-8">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-5">
            <div className="col-lg-6">
              <div className="section-heading-8 mb-0">
                <motion.h6
                  className="pc-title-left"
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  Contact
                </motion.h6>
                <motion.h2
                  className="title-anim"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <CustomGsapTextSplit>
                    Let's Get In <br />
                    Touch{" "}
                    <span className="special-tag">
                      Have Any Project In Mind?
                    </span>
                  </CustomGsapTextSplit>
                </motion.h2>
              </div>
            </div>
            <motion.div
              className="col-lg-6"
              initial={{
                y: -40,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{ duration: 1.2, ease: "easeIn" }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
