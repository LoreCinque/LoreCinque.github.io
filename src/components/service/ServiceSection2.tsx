"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import { serviceData2 } from "@/data/Data";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
const ServiceSection2 = () => {
  return (
    <section id="Service">
      <div className="service-8">
        <div className="container">
          <div className="section-heading-8">
            <div className="row align-items-center justify-content-between">
              <motion.div
                className="col-md-6"
                initial={{
                  x: -80,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
              >
                <h6 className="pc-title-left">Services</h6>
                <h2 className="title-anim">
                  <CustomGsapTextSplit children="Provide Exclusive Service" />
                </h2>
              </motion.div>
              <motion.div
                className="col-lg-4 col-md-6 offset-lg-1"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                viewport={{ once: true }}
              >
                <CustomGsapTextSplitLine className="title-txt title-anim">
                  Content writing service is a business or individual that
                  provides written content for websites, blogs, marketing
                  materials, and other these services is to provide.
                </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
          <div className="service-8-row justify-content-between">
            {serviceData2.map((item, index) => (
              <motion.div
                className="single-service"
                key={index}
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2 + 0.2 * index,
                }}
                viewport={{ once: true }}
              >
                <div className="part-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="part-txt">
                  <h3 className="title-anim">
                    <CustomGsapTextSplit children={item.title} />
                  </h3>
                  <CustomGsapTextSplitLine className="title-anim gsap-title-animate">
                    Creating articles for websites, blogs and other digital
                    platforms
                  </CustomGsapTextSplitLine>

                  <ul>
                    <li className="title-anim">
                      <span>
                        <i className="fa-light fa-plus"></i>
                      </span>{" "}
                      Entertain the reader
                    </li>
                    <li className="title-anim">
                      <span>
                        <i className="fa-light fa-plus"></i>
                      </span>{" "}
                      Text for a website's homepage
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <BounceAnimatedBtn className="section-btn btn-bounce-animated d-flex justify-content-end justify-content-md-center">
            <a href="#" className="circle-btn btn-hover">
              <span className="dot"></span>{" "}
              <span className="txt">
                View All <i className="fa-regular fa-arrow-up-right"></i>
              </span>
            </a>
          </BounceAnimatedBtn>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection2;
