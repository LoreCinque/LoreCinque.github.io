"use client";
import { testimonialData4 } from "@/data/Data";
import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import BrandSlider from "../slider/BrandSlider";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
const TestimonialSection4 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.realIndex); // Use `realIndex` to get the correct index
  };
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section id="Testimonial">
      <div className="testimonial-11 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-heading-11 text-center">
                <h2 className="title-anim">
                  <CustomGsapTextSplit>
                    Feedback From Past Clients
                  </CustomGsapTextSplit>
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center g-4">
            <div className="col-lg-5">
              <motion.div
                className="testimonial-11-slider-wrap fade_bottom"
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <Swiper
                  className="testimonial-11-slider"
                  pagination={{
                    type: "custom",
                    el: ".slider-counter",
                    clickable: true,
                  }}
                  loop={true}
                  modules={[Pagination]}
                  onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                  {testimonialData4.map((item) => (
                    <SwiperSlide className="single-testimonial" key={item.id}>
                      <div className="part-icon">
                        <i className="fa-solid fa-sharp fa-quote-right"></i>
                      </div>
                      <div className="part-txt">
                        <CustomGsapTextSplitLine>
                          "Great job on the recent blog post on 'The Benefits of
                          Meditation Your writing the style is engaging and the
                          research is well-done However, I suggest adding more
                          subheadings to break up the text and making the call
                          to action clearer. Keep up the good work!"
                        </CustomGsapTextSplitLine>
                        <div className="client-area">
                          <h3>
                            <CustomGsapTextSplit>
                              {item.name}
                            </CustomGsapTextSplit>
                          </h3>
                          <span>{item.title}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="slider-counter">
                  <h6>
                    {currentSlide + 1} <span /> 3
                  </h6>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-7">
              <div className="video-11">
                <div className="part-img image-animation">
                  <motion.img
                    src="img/video-bg-11.png"
                    className="image-animation-img"
                    alt="image"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
                <div className="btn-box">
                  <BounceAnimatedBtn className="btn-bounce-animated">
                    <a
                      role="button"
                      className="circle-btn btn-hover play-btn"
                      onClick={openVideoModal}
                    >
                      <span className="dot"></span>
                      <span className="txt">
                        <i className="fa-solid fa-play"></i>
                      </span>
                    </a>
                  </BounceAnimatedBtn>
                </div>
              </div>
            </div>
          </div>
          <BrandSlider />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection4;
