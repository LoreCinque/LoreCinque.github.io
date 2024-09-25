"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";

const VideoSection6 = () => {
  const dispatch = useAppDispatch();

  const toggleVideo = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <div className="homepage-11-video-section pc-video-area bg-cover pt-90 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-md-8">
            <div className="pc-video-content mb-20 mb-md-0">
              <h4 className="pc-video-content-title text-white title-anim mb-20">
                <CustomGsapTextSplit>
                  Best Medical & Health Care <br /> Near Your City
                </CustomGsapTextSplit>
              </h4>
              <CustomGsapTextSplitLine className="text-white">
                We’ve 25 Years of experienTce in Medical Services.
              </CustomGsapTextSplitLine>
              <div className="pc-video-button mt-35">
                <a href="#" className="def-btn def-btn-6 btn-hover">
                  <span className="dot"></span>{" "}
                  <span className="txt">
                    Doctor List <i className="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-4">
            <div className="pc-video-icon-wrapper main-clr6 text-md-center">
              <BounceAnimatedBtn>
                <a
                  className="pc-video-icon popup-video pulse-btn"
                  role="button"
                  onClick={toggleVideo}
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

export default VideoSection6;
