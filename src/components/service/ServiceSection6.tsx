import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { featureData } from "@/data/Data";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
type Props = {
  style?: string;
};
const ServiceSection6 = ({ style }: Props) => {
  return (
    <section id="Service">
      <div
        className={`service-sec service-sec-2 pc-service-sec4 ${style} pt-120 pb-120`}
      >
        <div className="container">
          <div className="row">
            <div className="section-heading section-heading-2 text-center">
              <h5 className="text-white ">
                <CustomGsapTextSplit children="What We Do" />
              </h5>
              <h2 className="text-white ">
                <CustomGsapTextSplit children="Service And Solutions" />
              </h2>
            </div>
          </div>
          <div className="row g-0 overflow-hidden">
            {featureData.map((item) => (
              <div className="col-sm-6 col-lg-4" key={item.id}>
                <div className="service-content">
                  <div className="animated-shape animated-shape-sm shape-white">
                    <div className="layer-1"></div>
                    <div className="layer-2"></div>
                    <div className="layer-3"></div>
                    <div className="layer-4"></div>
                    <div className="layer-5"></div>
                  </div>
                  <div className="service-icon">
                    <img src={item.img} alt="Icon" />
                    <img src={item.img} alt="Icon" />
                  </div>
                  <h4 className="service-content-title">
                    <CustomGsapTextSplit>
                      <a href="#" className="text-white">
                        {item.title}
                      </a>
                    </CustomGsapTextSplit>
                  </h4>
                  <CustomGsapTextSplitLine className="service-content-desp">
                    {item.description}
                  </CustomGsapTextSplitLine>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection6;
