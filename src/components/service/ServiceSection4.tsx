import { serviceData4 } from "@/data/Data";
import Link from "next/link";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";

const ServiceSection4 = () => {
  return (
    <section id="Service">
      <div className="service-sec">
        <div className="container">
          <div className="row">
            <div className="section-heading text-center">
              <h5 className="title-anim">
                <CustomGsapTextSplit>
                    What We Do
                </CustomGsapTextSplit>
            </h5>
              <h2 className="title-anim">
                <CustomGsapTextSplit>
                    Service And Solutions
                </CustomGsapTextSplit>
              </h2>
            </div>
          </div>
          <div className="service-row">
            <div className="single-row">
              {serviceData4.map((item) => (
                <div 
                className="service-content" 
                key={item.id}
                >
                  <div className="animated-shape animated-shape-sm shape-white">
                    <div className="layer-1"></div>
                    <div className="layer-2"></div>
                    <div className="layer-3"></div>
                    <div className="layer-4"></div>
                    <div className="layer-5"></div>
                  </div>
                  <div className="service-icon">
                    <img src={item.imgSrc} alt="Icon" />
                    <img src={item.imgSrc} alt="Icon" />
                  </div>
                  <h4 className="service-content-title">
                    <Link href="#">
                        <CustomGsapTextSplit children={item.title} />
                    </Link>
                  </h4>
                  <CustomGsapTextSplitLine className="service-content-desp">
                    Lorem ipsum dolor sit amet, consect adisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                  </CustomGsapTextSplitLine>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection4;
