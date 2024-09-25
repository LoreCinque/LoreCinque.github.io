"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { motion } from "framer-motion";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
const VideoSection4 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <div
      className="pc-video-area bg-cover pt-90 pb-90"
      data-background="img/video_bg.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-xl-7 col-md-7"
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
            <div className="pc-video-content mb-20 mb-md-0">
              <h4 className="pc-video-content-title text-white title-anim mb-20">
                <CustomGsapTextSplit>Photos Eos 5D Mark</CustomGsapTextSplit>
              </h4>
              <div className="pc-video-content-list title-anim">
                <ul>
                  <li>
                    <i className="fa-solid fa-check-to-slot"></i> Every pixel is
                    clear & Quality photo
                  </li>
                  <li>
                    <i className="fa-solid fa-check-to-slot"></i> Trendy Body
                    Comes From Chaina
                  </li>
                  <li>
                    <i className="fa-solid fa-check-to-slot"></i> Canon EOS5D
                    Now Available in mitako Stock
                  </li>
                  <li>
                    <i className="fa-solid fa-check-to-slot"></i> Every pixel is
                    clear & Quality photo
                  </li>
                </ul>
              </div>
              <div className="pc-video-button mt-35">
                <a href="#" className="def-btn def-btn-4 btn-hover">
                  <span className="dot"></span>{" "}
                  <span className="txt">Shop New</span>
                </a>
              </div>
            </div>
          </motion.div>
          <div className="col-xl-5 col-md-5">
            <div className="pc-video-icon-wrapper text-md-center">
              <BounceAnimatedBtn>
                <a
                  className="pc-video-icon popup-video pulse-btn"
                  role="button"
                  onClick={openVideoModal}
                >
                  <i className="fa-solid fa-play"></i>
                </a>
              </BounceAnimatedBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection4;
