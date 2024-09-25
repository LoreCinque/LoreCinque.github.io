import { serviceData5 } from '@/data/Data'
import React from 'react'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
type Props = {
    style?: string;
}
const ServiceSection5 = ({ style } : Props) => {
  return (
    <section id="Service">
        <div className={`service-sec service-sec-2 ${style}`}>
            <div className="container">
                <div className="row">
                    <div className="section-heading section-heading-2 text-center">
                        <h5><CustomGsapTextSplit children="What We Do" /></h5>
                        <h2><CustomGsapTextSplit children="Service And Solutions" /></h2>
                    </div>
                </div>
                <div className="row g-4">
                    {serviceData5.map((item) => (
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
                                <img src={item.darkImg} alt="Icon"/>
                                <img src={item.lightImg} alt="Icon"/>
                            </div>
                            <h4 className="service-content-title">
                                <a href="#">
                                    <CustomGsapTextSplit children={item.title} />
                                </a>
                            </h4>
                            <CustomGsapTextSplitLine className="service-content-desp">
                                Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </CustomGsapTextSplitLine>
                            <a href="#" className="click-more">Read More</a>
                        </div>
                    </div>    
                    ))}
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection5