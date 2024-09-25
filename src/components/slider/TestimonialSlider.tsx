"use client";

import { testimonialData6 } from "@/data/Data";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
type Props = {
  style?: string;
};

const TestimonialSlider = ({ style }: Props) => {
  return (
    <section
      className={`testimonial-slider-section pc-feedback-area ${style} text-white pt-90 pb-80`}
      id="Testimonial"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 testimonial-slider-container">
            <Swiper
              className="pc_feedback_slider testimonial-carousel"
              loop={true}
              navigation={{
                prevEl: ".testimonial-slider-prev",
                nextEl: ".testimonial-slider-next",
              }}
              modules={[Navigation]}
            >
              {testimonialData6.map((item) => (
                <SwiperSlide className="single-slider" key={item.id}>
                  <motion.div
                    className="pc-feedback-content"
                    initial={{
                      y: 50,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  >
                    <span className="feedback_user">
                      <img src={item.img} alt="img" />
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis.
                    </p>
                    <span className="feedback_author">
                      {item.author}{" "}
                      <span className="feedback_designation">
                        {item.designation}
                      </span>
                    </span>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="testimonial-slider-nav">
              <button
                type="button"
                role="presentation"
                className="testimonial-slider-prev"
              >
                <i className="fa-solid fa-left-long"></i>
              </button>
              <button
                type="button"
                role="presentation"
                className="testimonial-slider-next"
              >
                <i className="fa-solid fa-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
