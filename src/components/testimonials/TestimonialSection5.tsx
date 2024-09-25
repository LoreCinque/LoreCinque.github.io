"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { testimonialData5 } from "@/data/Data";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";
type Props = {
  style: string;
  showShape?: boolean;
};
const TestimonialSection5 = ({ style, showShape }: Props) => {
  return (
    <section className={`testimonial ${style}`}>
      {showShape && (
        <div className="animated-shape shape-white">
          <div className="layer-1"></div>
          <div className="layer-2"></div>
          <div className="layer-3"></div>
          <div className="layer-4"></div>
          <div className="layer-5"></div>
        </div>
      )}
      <div className="container">
        <div className="section-heading text-center">
          <h5>
            <CustomGsapTextSplit children="Testimonial" />
          </h5>
          <h2>
            <CustomGsapTextSplit children="What Our Clients Say" />
          </h2>
        </div>
      </div>
      <div className="container">
        <Swiper
          className="testimonial-slider home-5-testimonial"
          autoplay={false}
          loop={true}
          slidesPerView={3}
          spaceBetween={25}
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
            <SwiperSlide className="single-slider" key={item.id}>
              <div className="quote">
                <img src="img/quote.png" alt="”" />
              </div>
              <CustomGsapTextSplitLine>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </CustomGsapTextSplitLine>
              <motion.div
                className="user"
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.8 }}
              >
                <img src={item.imgSrc} alt="Image" />
                <h4 className="client-name">
                  <span>{item.name}</span>
                  {item.designation}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection5;
