"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { testimonialData } from "@/data/Data";
import {motion} from 'framer-motion'
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";

const TestimonialSection = () => {
  const testimonialSliderRef = useRef<Slider>(null);
  const imageSliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (testimonialSliderRef.current && imageSliderRef.current) {
      testimonialSliderRef.current.slickGoTo(0);
    }
  }, []);

  const sliderSettings = {
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    afterChange: (currentSlide: number) => {
      // Synchronize the image slider with the testimonial slider
      imageSliderRef.current?.slickGoTo(currentSlide);
    },
  };

  const imageSliderSettings = {
    slidesToShow: 3,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2000,
  };


  return (
    <section>
      <div className="testimonial-9 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="section-heading-8 section-heading-9 text-center">
                <motion.h6 
                className="pc-title-left"
                initial={{
                  x: 40,
                  opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{once: true}}
                >Testimonials</motion.h6>
                <motion.h2 
                className="title-anim"
                initial={{
                  opacity: 0
                }}
                whileInView={{
                  opacity: 1
                }}
                transition={{
                  duration: 0.8
                }}
                viewport={{once: true}}
                >
                  <CustomGsapTextSplit children='Audience Says'/>
                </motion.h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-11">
              <div className="testimonial-8-slider-wrap fade_bottom">
                <motion.div 
                className="testimonial-8-slider-nav-container"
                initial={{
                  opacity: 0,
                  y: 60
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1.5
                }}
                viewport={{once: true}}
                >
                  <button
                    className="slick-prev slick-arrow"
                    onClick={() => testimonialSliderRef.current?.slickPrev()}
                  >
                    <i className="fa-thin fa-arrow-left-long"></i>
                  </button>
                  <button
                    className="slick-next slick-arrow"
                    onClick={() => testimonialSliderRef.current?.slickNext()}
                  >
                    <i className="fa-thin fa-arrow-right-long"></i>
                  </button>
                </motion.div>

                <Slider
                   ref={testimonialSliderRef}
                   {...sliderSettings}
                   className="testimonial-9-slider"
                >
                  {testimonialData.map((item, index) => (
                    <div 
                    className="single-testimonial" 
                    key={index}
                    >
                      <motion.div 
                      className="part-txt"
                      initial={{
                        opacity: 0,
                        y: 40,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 1.5
                      }}
                      viewport={{once: true}}
                      >
                        <span className="part-icon">
                          <i className="fa-solid fa-quote-right"></i>
                        </span>
                        <CustomGsapTextSplitLine>
                          "Great job on the recent blog post on 'The Benefits of
                          Meditation Your writing the style is engaging and the
                          research is well-done However, I suggest adding more
                          subheadings to break up the text and making the call
                          to action clearer. Keep up the good work!"
                        </CustomGsapTextSplitLine>
                        <div className="client-area">
                          <h3 className="client-name">{item.name}</h3>
                          <span>{item.position}</span>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </Slider>

                <Slider
                 ref={imageSliderRef}
                 {...imageSliderSettings}
                 className="testimonial-9-image-slider"
                >
                  {testimonialData.map((item, index) => (
                    <motion.div 
                    className={`part-img ${imageSliderRef.current? 'active':''}`}
                    key={index}
                    initial={{
                      opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    viewport={{once: true}}
                    >
                      <img src={item.img} alt="image" />
                    </motion.div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
