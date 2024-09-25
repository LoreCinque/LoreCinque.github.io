import React from "react";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";

const FreelancerVideoContent = () => {
  return (
    <div className="main-clr5 pc-video-icon-wrapper text-center">
      <BounceAnimatedBtn>
        <a className="pc-video-icon popup-video pulse-btn mb-20">
          <i className="fa-solid fa-play"></i>
        </a>
      </BounceAnimatedBtn>

      <h2 className="pc-video5-title">
        <CustomGsapTextSplit>
          Our Experience Allows to Bring Disruptive
        </CustomGsapTextSplit>
      </h2>
    </div>
  );
};

export default FreelancerVideoContent;
