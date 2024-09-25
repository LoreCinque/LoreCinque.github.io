"use client";
import { faqData } from "@/data/Data";
import React from "react";
import { Accordion } from "react-bootstrap";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
const FaqSection = () => {
  return (
    <section>
      <div className="faq-11 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="part-txt">
                <h2 className="faq-11-title title-anim">
                  <CustomGsapTextSplit>
                    Frequently Asked Questions (FAQ's)
                  </CustomGsapTextSplit>
                </h2>
                <Accordion
                  className="faq-10-accordion faq-11-accordion"
                  id="faq_11"
                  defaultActiveKey="1"
                >
                  {faqData?.map((item) => (
                    <motion.div
                      initial={{
                        y: -60,
                        x: -60,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        x: 0,
                        opacity: 1,
                      }}
                      viewport={{ once: true }}

                      transition={{
                        duration: 1.2 + 0.2 * item.id,
                        ease: "easeIn",
                      }}
                      className="faq-accordion-item"
                      key={item.id}
                    >
                      <Accordion.Item
                        className="title-anim"
                        key={item.id}
                        eventKey={item.id.toString()}
                      >
                        <Accordion.Header>
                          <CustomGsapTextSplit>{item.ques}</CustomGsapTextSplit>
                        </Accordion.Header>
                        <Accordion.Collapse eventKey={item.id.toString()}>
                          <Accordion.Body>
                            As an accountant, I provide a wide range of services
                            including tax preparation, bookkeeping, financial.
                          </Accordion.Body>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="faq-11-img faq-image-container"
                // ref={faqImageRef}
              >
                <div className="image-animation">
                  <motion.img
                    src="img/faq-img-11.png"
                    className="image-animation-img"
                    alt="image"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}

                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
