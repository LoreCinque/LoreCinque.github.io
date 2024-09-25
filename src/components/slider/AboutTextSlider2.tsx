"use client";
import { aboutData } from "@/data/Data";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AboutTextSlider2 = () => {
  return (
    <>
      <Swiper
        className="pc-about-right5-experience-active"
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        pagination={{
          el: ".owl-dots",
          bulletClass: "owl-dot",
          bulletActiveClass: "active",
          bulletElement: "button",
        }}
        modules={[Autoplay, Pagination]}
      >
        {aboutData.map((item) => (
          <SwiperSlide className="pc-about-single-slider" key={item.id}>
            <div className="pc-about5-right-content">
              <span className="pc-about5-icon">
                <i className={item.icon}></i>
              </span>
              <h4 className="pc-about5-content-title">
                {item.yearsExperience} Years Of <strong>Experience</strong>
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="owl-dots"></div>
    </>
  );
};

export default AboutTextSlider2;
