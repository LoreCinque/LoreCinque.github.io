"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import ContactForm2 from "../form/ContactForm2";
const ContactSection2 = () => {
  return (
    <section id="Contact">
      <div className="contact-11 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row align-items-center justify-content-between g-4">
            <motion.div
              className="col-lg-5"
              initial={{
                x: -80,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
              }}
            >
              <div className="section-heading-11">
                <h2 className="title-anim">
                  <CustomGsapTextSplit>
                    Have Any Project In Mind?
                  </CustomGsapTextSplit>
                </h2>
                <CustomGsapTextSplitLine className="title-txt title-anim">
                  If you have a new project in mind, congratulations! Starting a
                  new project can be exciting and rewarding. Here are some steps
                  that you can take to get started
                </CustomGsapTextSplitLine>
              </div>
              <div className="contact-info fade_bottom">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="contact-11-info-card">
                      <span className="part-icon">
                        <i className="fa-thin fa-phone-plus"></i>
                      </span>
                      <div className="part-txt">
                        <span className="card-name">Phone:</span>
                        <a href="tel:5552441457">(555) 244-1457</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="contact-11-info-card">
                      <span className="part-icon">
                        <i className="fa-thin fa-envelope-open"></i>
                      </span>
                      <div className="part-txt">
                        <span className="card-name">Email Address:</span>
                        <a href="mailto:johndoe@example.com">
                          johndoe@example.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6"
              initial={{
                x: 80,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
              }}
            >
              <ContactForm2 />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
