"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { videoData } from "@/data/Data";
import CountUp from "react-countup";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";

const VideoSection = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".counter-box");
  
    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );
  
      intersectionObserverRef.current.observe(targetElement);
    }
  
    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <section>
      <div className="video-8 video-9">
        <div className="container">
          <div className="section-heading-8 section-heading-9">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.h6
                  className="pc-title-left"
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  viewport={{once: true}}
                >
                  Video
                </motion.h6>
                <motion.h2
                  className="title-anim"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  viewport={{once: true}}
                >
                  <CustomGsapTextSplit children="Watch Trailer" />
                </motion.h2>
              </div>
              <motion.div 
              className="col-xl-5 col-lg-6"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
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
          <div className="video-box video-box-animation">
            <img src="img/video-bg-9.png" alt="Image" />
            <div className="btn-box d-flex align-items-center gap-3 gap-sm-4">
              <BounceAnimatedBtn className="btn-bounce-animated">
                <a
                  role="button"
                  className="circle-btn btn-hover play-btn"
                  onClick={openVideoModal}
                >
                  <span className="dot"></span>{" "}
                  <span className="txt">
                    <i className="fa-thin fa-play"></i>
                  </span>
                </a>
              </BounceAnimatedBtn>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5 }}
                href="#"
                className="text-light play-btn"
                viewport={{once: true}}
              >
                Watch Trailer
              </motion.a>
            </div>
          </div>
        </div>
        <div className="counter-9 bg-dark bg-opacity-25">
          <div className="container">
            <div className="row align-items-center row-gap-md-0 row-gap-5">
              {videoData.map((item, index) => (
                <div className="col-lg-3 col-md-3 col-sm-6" key={index}>
                  <motion.div
                    className="counter-box fade_bottom"
                    initial={{
                      y: 40,
                      opacity: 0,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    viewport={{once: true}}
                  >
                      <div>
                        <h2 className="counter">
                          {isVisible && (
                            <CountUp end={item.count} duration={5} />
                          )}
                        </h2>
                        <p>{item.position}</p>
                      </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
