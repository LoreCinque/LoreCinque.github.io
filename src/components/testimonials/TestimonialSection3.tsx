'use client'
import { testimonialData3 } from "@/data/Data";
import React from "react";
import Slider from "react-slick";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";

const TestimonialSection3 = () => {
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
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Initial position off-screen
    },
    visible: {
      opacity: 1,
      x: 0, // Final position on-screen
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <section>
      <div className="testimonial-8 testimonial-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <motion.div 
              className="section-heading-8 section-heading-10 text-center"
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{once: true}}
              transition={{duration: 1.2}}
              >
                <h2 className="mb-4"><CustomGsapTextSplit children="students Say"/></h2>
                    <CustomGsapTextSplitLine className="title-txt">
                        Aerobics is a form of cardiovascular exercise that involves a
                        combination of rhythmic movements, dance-like steps, and
                        repetitive motions 
                    </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
          <div className="testimonial-8-slider-wrap fade_bottom">
            <Slider {...sliderSettings} className="testimonial-8-slider">
              {testimonialData3.map((item) => (
                <div className="single-testimonial" key={item.id}>
                  <div className={`row ${item.id % 2 === 0 ? '' : 'justify-content-end'}`}>
                    <div className="col-lg-8">
                      <div className="row align-items-center">
                        <div className={`col-4 ${item.id % 2 === 0 ? '' : 'order-2'}`}>
                          <div className="part-img">
                            <motion.img 
                            src={item.img} 
                            alt="Image" 
                            initial={{
                                scale: 1.2
                            }}
                            whileInView={{
                                scale: 1
                            }}
                            viewport={{once: true}}
                            transition={{
                                duration: 1.2
                            }}
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="part-txt">
                            <span className="part-icon">
                              <i className="fa-solid fa-quote-right"></i>
                            </span>

                            <motion.p initial="hidden" whileInView="visible" variants={textVariants} viewport={{once: true}}>
                            "Great job on the recent blog post on 'The Benefits of Meditation. Your writing style is engaging, and the research is well-done. However, I suggest adding more subheadings to break up the text and making the call to action clearer. Keep up the good work!"
                            </motion.p>
                            <motion.div 
                            className="client-area"
                            initial={{
                              x: 80,
                              opacity: 0
                            }}
                            whileInView={{
                              x: 0,
                              opacity: 1
                            }}
                            viewport={{once: true}}
                            transition={{duration: 1.2}}
                            >
                              <h3 className="client-name">
                                <CustomGsapTextSplit children={item.name}/>
                              </h3>
                              <span>{item.title}</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection3;
