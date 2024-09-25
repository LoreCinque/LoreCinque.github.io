"use client";
import React, { useEffect, useRef } from "react";
import { servicesData } from "@/data/Data";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
const ServiceSection: React.FC = () => {
  const serviceImgItemRefs = useRef<
    Array<React.MutableRefObject<HTMLDivElement | null>>
  >([]);

  const followImageCursor = (
    event: MouseEvent,
    itemRef: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    const item = itemRef.current;
    if (item) {
      const contentBox = item.getBoundingClientRect();
      const dx = event.clientX - contentBox.x;
      const dy = event.clientY - contentBox.y;
      item.children[1].setAttribute(
        "style",
        `transform: translate(${dx}px, ${dy}px)`
      );
    }
  };
  // Initialize refs
  serviceImgItemRefs.current = servicesData.map(() =>
    useRef<HTMLDivElement | null>(null)
  );
  useEffect(() => {
    // Attach event listeners
    serviceImgItemRefs.current.forEach((itemRef) => {
      if (itemRef.current) {
        itemRef.current.addEventListener("mousemove", (event) => {
          followImageCursor(event, itemRef);
        });
      }
    });

    // Cleanup event listeners on component unmount
    return () => {
      serviceImgItemRefs.current.forEach((itemRef) => {
        if (itemRef.current) {
          itemRef.current.removeEventListener("mousemove", (event) => {
            followImageCursor(event, itemRef);
          });
        }
      });
    };
  }, []);

  return (
    <section id="Service">
      <div className="service-8 service-9">
        <div className="container">
          <div className="section-heading-8 section-heading-9">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.h6
                  className="pc-title-left"
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{ once: true }}
                >
                  Services
                </motion.h6>
                <motion.h2
                  className="title-anim"
                  initial={{
                    x: -60,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{ once: true }}
                >
                  <CustomGsapTextSplit children="What I Do" />
                </motion.h2>
              </div>
              <div className="col-xl-5 col-lg-6">
                <CustomGsapTextSplitLine className="title-txt title-anim">
                  Content writing service is a business or individual that
                  provides written content for websites, blogs, marketing
                  materials, and other these services is to provide.
                </CustomGsapTextSplitLine>
              </div>
            </div>
          </div>
          <div className="service-list">
            {servicesData.map((item, index) => {
              const initialDuration = 1;
              return (
                <motion.div
                  initial={{
                    x: -200,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: initialDuration + index * 0.5 }}
                  className="single-service image_with_cursor fade_left"
                  key={index}
                  ref={serviceImgItemRefs.current[index]}
                >
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-3 fade_left_item">
                      <h3>
                        <a href="#">{item.title}</a>
                        <span>{item.number}</span>
                      </h3>
                    </div>
                    <div className="col-xl-7 col-lg-8 col-md-9 fade_left_item">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-9">
                          <div className="part-txt">
                            <p>{item.description}</p>
                            <ul>
                              <li>
                                <span></span>Submit themselves for roles
                              </li>
                              <li>
                                <span></span>submit themselves for roles
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-3 d-flex justify-content-end position-relative">
                          <BounceAnimatedBtn className="btn-bounce-animated">
                            <a href="#" className="circle-btn btn-hover">
                              <span className="dot"></span>{" "}
                              <span className="txt">
                                Details{" "}
                                <i className="fa-regular fa-arrow-up-right"></i>
                              </span>
                            </a>
                          </BounceAnimatedBtn>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-hover">
                    <img src={item.image} alt="Image" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
