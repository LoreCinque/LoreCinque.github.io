"use client";
import { trainingGalleryData } from "@/data/Data";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
const GallerySection = () => {
  return (
    <section id="Portfolio">
      <div className="training-gallery-10 bg-dark bg-opacity-25">
        <div className="container">
          <div className="section-heading-8 section-heading-10">
            <div className="row align-items-center row-gap-lg-0 row-gap-5">
              <motion.div
                className="col-lg-7"
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
                <h2 className="title-anim">
                  <CustomGsapTextSplit children="my training Gallery" />
                </h2>
              </motion.div>
              <motion.div
                className="col-lg-5"
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
                  Aerobics is a form of cardiovascular exercise that involves a
                  combination of rhythmic movements, dance-like steps, and
                  repetitive motions that are performed to music. It is designed
                  to increase the heart rate and improve cardiovascular.
                </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
        </div>
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            thresholdDelta: 70,
          }}
          breakpoints={{
            460: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1600: {
              slidesPerView: 2.45,
            },
          }}
        >
          {trainingGalleryData.map((item, index) => (
            <SwiperSlide className={item.slider} key={index}>
              <div className="slide-content">
                <motion.div
                  className="part-img image-animation"
                  initial={{
                    y: -50,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.img
                    src={item.imageUrl}
                    className="image-animation-img"
                    alt="image"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 1.2,
                    }}
                    viewport={{ once: true }}
                  />
                </motion.div>
                <div className="part-txt">
                  <div>
                    <h3 className="gallery-title">{item.title}</h3>
                    <span className="training-name">{item.trainingName}</span>
                  </div>
                  <a>
                    <img src={item.imageUrl} className="d-none" alt="image 1" />
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default GallerySection;
