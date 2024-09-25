"use client";
import { testimonialData5 } from "@/data/Data";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
type Props = {
  style?: string;
};

const TestimonialSlider2 = ({ style }: Props) => {
  return (
    <section
      className={`pc-testimonial-area ${style} pt-90 pb-120`}
      id="Testimonial"
    >
      <div className="container">
        <div className="section-heading text-center">
          <h5>
            <CustomGsapTextSplit>Testimonial</CustomGsapTextSplit>
          </h5>
          <h2>
            <CustomGsapTextSplit>What My Clients Say</CustomGsapTextSplit>
          </h2>
        </div>
      </div>
      <div className="container">
        <Swiper
          className="testimonial-slider"
          spaceBetween={25}
          slidesPerView={3}
          loop={true}
          autoplay={true}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialData5.map((item) => (
            <SwiperSlide
              className="single-slider pc-test6-slider"
              key={item.id}
            >
              <motion.div
                className="user"
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <img src={item.imgSrc} alt="Image" />
                <h4 className="client-name">
                  {" "}
                  <span>{item.name}</span>
                  {item.designation}
                </h4>
              </motion.div>
              <motion.div
                className="pc-test-content"
                initial={{
                  y: 40,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeIn" }}
              >
                <p>
                  <span className="pc-test-quote-right">
                    <i className="fa-solid fa-quote-left"></i>
                  </span>
                  {item.review}
                  <span className="pc-test-quote-left">
                    <i className="fa-solid fa-quote-right"></i>
                  </span>
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider2;
