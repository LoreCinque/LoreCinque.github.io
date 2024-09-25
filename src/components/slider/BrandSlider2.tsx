"use client";
import { brandData4 } from "@/data/Data";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

type Props = {
  style: string;
};
const BrandSlider2 = ({ style }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className={`${style} pc-branding-area pt-70 pb-70`}>
      <div className="container">
        <div className="row">
          <motion.div
            className="col-xl-12"
            initial={{
              y: 60,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeIn",
            }}
            viewport={{ once: true }}
          >
            <Slider {...settings} className="pc_branding_slider owl-carousel">
              {brandData4.map((item) => (
                <div className="pc_brand_single" key={item.id}>
                  <img src={item.img} alt="img" />
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrandSlider2;
