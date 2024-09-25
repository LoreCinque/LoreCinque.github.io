import React from "react";
import FreelancerVideoContent from "./FreelancerVideoContent";
import DoctorVideoContent from "./DoctorVideoContent";
type Props = {
  style?: string;
  freelancer?: boolean;
};
const VideoSection5 = ({ style, freelancer }: Props) => {
  return (
    <div className={`${style} pc-video5-area pt-100 pb-245`}>
      <div className="container">
        <div
          className={`row justify-content-center ${
            !freelancer && "text-center"
          }`}
        >
          <div className="col-xl-8 col-lg-10">
            {freelancer ? <FreelancerVideoContent /> : <DoctorVideoContent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection5;
