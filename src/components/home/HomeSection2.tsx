'use client'
import React from 'react'
import {motion} from 'framer-motion'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import BannerBottom from './BannerBottom'
import BounceAnimatedBtn from '../utils/BounceAnimatedBtn'

const HomeSection2 = () => {
  return (
    <section id="Home">
        <div className="banner banner-8">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-sm-9 col-10">
                        <div className="banner-txt">
                            <div className="banner-heading">
                                <motion.h4 
                                className="pc-title-left"
                                initial={{
                                    x: -80,
                                    opacity: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 1
                                }}
                                viewport={{once: true}}
                                >Content Writer <span className="arrow"><img src="img/arrow-icon.png" alt="arrow"/></span></motion.h4>
                                <motion.h1 
                                className="title-anim"
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1}}
                                transition={{ duration: 1.2 }}
                                viewport={{once: true}}
                                >
                                    <CustomGsapTextSplit children="I'm David James"/>
                                </motion.h1>
                            </div>
                            <BounceAnimatedBtn className=''>
                                <a href="#" className="circle-btn btn-hover hero__button"><span className="dot"></span> <span className="txt">Contact Me <i className="fa-regular fa-arrow-up-right"></i></span></a>
                            </BounceAnimatedBtn>
                        </div>
                    </div>
                </div>
            </div>
            <BannerBottom href='#about'/>
        </div>
    </section>
  )
}

export default HomeSection2