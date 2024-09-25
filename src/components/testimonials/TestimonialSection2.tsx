"use client";
import { testimonialData2 } from "@/data/Data";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
const TestimonialSection2 = () => {
  const sliderSettings = {
    slidesToShow: 2,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  return (
    <section>
      <div className="testimonial-8">
        <div className="container">
          <div className="section-heading-8">
            <div className="row align-items-center">
              <motion.div
                className="col-xl-5 col-md-6"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 1.2 }}
                viewport={{once: true}}
              >
                <h6 className="pc-title-left">Testimonial</h6>
                <CustomGsapTextSplit>
                  <h2 className="title-anim">Feedback From Clients</h2>
                </CustomGsapTextSplit>
              </motion.div>
              <motion.div
                className="col-lg-4 col-md-6 offset-xl-2 offset-lg-1"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 1.2 }}
                viewport={{once: true}}
              >
                <CustomGsapTextSplitLine className="title-txt title-anim">
                  Content writing service is a business or individual that
                  provides written content for websites, blogs, marketing
                  materials, and other these services is to provide.
                </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
          <div className="testimonial-8-slider-wrap fade_bottom">
            <Slider {...sliderSettings} className="testimonial-8-slider">
              {testimonialData2.map((item) => (
                <div className="single-testimonial" key={item.id}>
                  {item.id % 2 === 0 ? (
                    <motion.div
                      className="row align-items-center row-gap-5 row-gap-sm-0"
                      initial={{
                        x: -60,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{ duration: 1.4 + 0.2 * item.id }}
                      viewport={{once: true}}
                    >
                      <div className="col-lg-3 col-sm-4">
                        <div className="part-img">
                          <motion.img
                            src={item.img}
                            alt="Image"
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{once: true}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-7 col-sm-8">
                        <div className="part-txt">
                          <span className="part-icon">
                            <i className="fa-solid fa-quote-left"></i>
                          </span>
                          <CustomGsapTextSplitLine>
                            "Great job on the recent blog post on 'The Benefits
                            of Meditation Your writing the style is engaging and
                            the research is well-done However, I suggest adding
                            more subheadings to break up the text and making the
                            call to action clearer. Keep up the good work!"
                          </CustomGsapTextSplitLine>
                          <div className="client-area">
                            <div className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <h3 className="client-name">
                              <CustomGsapTextSplit children={item.name} />
                            </h3>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      className="row align-items-center justify-content-end row-gap-5 row-gap-sm-0"
                      initial={{
                        x: 60,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{ duration: 1.4 + 0.2 * item.id }}
                      viewport={{once: true}}
                    >
                      <div className="col-lg-7 col-sm-8 order-sm-1 order-2">
                        <div className="part-txt">
                          <span className="part-icon">
                            <i className="fa-solid fa-quote-left"></i>
                          </span>
                          <CustomGsapTextSplitLine>
                            "Great job on the recent blog post on 'The Benefits
                            of Meditation Your writing the style is engaging and
                            the research is well-done However, I suggest adding
                            more subheadings to break up the text and making the
                            call to action clearer. Keep up the good work!"
                          </CustomGsapTextSplitLine>{" "}
                          <div className="client-area">
                            <div className="star">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                            <h3 className="client-name">
                              <CustomGsapTextSplit children={item.name} />
                            </h3>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-4 order-sm-2 order-1">
                        <div className="part-img">
                          <motion.img
                            src={item.img}
                            alt="Image"
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{once: true}}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection2;
