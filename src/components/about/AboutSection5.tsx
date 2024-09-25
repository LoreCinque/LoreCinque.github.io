'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
const AboutSection5 = () => {
  return (
    <div id="About">
        <div className="project-wrapper">
            <div className="animated-shape shape-white shape-1">
                <div className="layer-1"></div>
                <div className="layer-2"></div>
                <div className="layer-3"></div>
                <div className="layer-4"></div>
                <div className="layer-5"></div>
            </div>
            <div className="animated-shape shape-2">
                <div className="layer-1"></div>
                <div className="layer-2"></div>
                <div className="layer-3"></div>
                <div className="layer-4"></div>
                <div className="layer-5"></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <motion.div 
                    className="col-md-5"
                    initial={{
                    x: -100,
                    opacity: 0
                    }}
                    whileInView={{
                    x: 0,
                    opacity: 1
                    }}
                    viewport={{once: true}}
                    transition={{duration:1.2}}
                    >
                        <div className="project-image">
                            <img src="img/03_home.png" alt="Image" className="project-img"/>
                            <div className="animate">
                                <img src="img/Z-index.png" alt="frame"/>
                            </div>
                        </div>
                    </motion.div>
                    <div className=" col-md-7">
                        <div className="project-content">
                            <div className="section-heading">
                                <h5 className="title-anim">
                                    <CustomGsapTextSplit>
                                        ABOUT ME
                                    </CustomGsapTextSplit>
                                </h5>
                                <h2 className="title-anim">
                                <CustomGsapTextSplit>
                                Why Hire Me for Your<br/> Next Project?
                                </CustomGsapTextSplit>
                                </h2>
                            </div>
                            <div className="text-anim">
                                <CustomGsapTextSplitLine className="first">
                                    Nunc eu augue at nunc consectetur venenatis sit amet sodales metus. Sed at gravida nisi, mattis lacinia ipsum. Pellentesque suscipit odio quis ligula maximus aliquet. Integer cursus ipsum et posuere ornare.
                                </CustomGsapTextSplitLine>
                                <CustomGsapTextSplitLine>
                                    We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.We work with you, not for you.
                                </CustomGsapTextSplitLine>
                            </div>
                            <motion.div 
                            className="project-btn" 
                            id="btn_wrapper"
                            initial={{
                            y: 50,
                            opacity: 0
                            }}
                            whileInView={{
                            y: 0,
                            opacity: 1
                            }}
                            viewport={{once: true}}
                            transition={{duration:1.2}}
                            >
                                <a href="#" className="def-btn btn-hover"><span className="dot"></span> <span className="txt">Learn More</span></a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection5