import { skillData } from '@/data/Data'
import React from 'react'
import CustomCircularProgressbar from '../utils/CustomCircularProgressbar'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'

const SkillSection2 = () => {
  return (
    <section>
        <div className="progressbar-sec progressbar-sec-4" data-bgcolor="#0c0b37">
            <div className="container">
                <div className="progressbar">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="pc-progress-wrapper pr-50">
                                <div className="row g-4">
                                    {skillData.slice(0,3).map((item) => (
                                        <div className="col-md-4 col-sm-6" key={item.id}>
                                            <div className="box">
                                                <div className="chart chart-2" data-percent="89">
                                                    <CustomCircularProgressbar
                                                    circleColor='#ea4343'
                                                    textColor='#fff'
                                                    value={item.value}
                                                    />
                                                </div>
                                                <h2 className="title-anim">{item.title}</h2>
                                            </div>
                                        </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="pc-about-text-wrapper">
                                <span className="pc-about-subtitle title-anim">About Me</span>
                                <h4 className="pc-about-title title-anim">
                                    <CustomGsapTextSplit children="Why Hire Me for Your Next Project?" />
                                </h4>
                                <div className="text-anim">
                                    <CustomGsapTextSplitLine>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</CustomGsapTextSplitLine>
                                </div>
                                <div className="pc-about-info-inner mt-15">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pc-about-info-inner-single">
                                                <h5 className="pc-about-info-inner-label title-anim">Name</h5>
                                                <span className="pc-about-info-inner-text title-anim">Micheal Smith</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pc-about-info-inner-single">
                                                <h5 className="pc-about-info-inner-label title-anim">Email</h5>
                                                <span className="pc-about-info-inner-text title-anim">example@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pc-about-info-inner-single">
                                                <h5 className="pc-about-info-inner-label title-anim">Date Of Birth</h5>
                                                <span className="pc-about-info-inner-text title-anim">8 June 1999</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pc-about-info-inner-single">
                                                <h5 className="pc-about-info-inner-label title-anim">Address</h5>
                                                <span className="pc-about-info-inner-text title-anim">Silicon Valley, USA</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pc-about-info-inner-single">
                                                <h5 className="pc-about-info-inner-label title-anim">Phone</h5>
                                                <span className="pc-about-info-inner-text title-anim">+78658566889</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="pc-about-info-inner-single">
                                                <h5 className="pc-about-info-inner-label title-anim">Language</h5>
                                                <span className="pc-about-info-inner-text title-anim">English, Chinese</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pc-about-info-inner-button mt-20">
                                        <a href="#" className="def-btn btn-hover def-btnrd"><span className="dot"></span> <span className="txt">Read More <i className="fa-solid fa-arrow-right-long"></i></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center pt-120">
                        <div className="col-xl-6">
                            <div className="pc-service-section-wrapper pr-120">
                                <div className="pc-service-box-single ml-110 text-white mb-30">
                                    <span className="pc-service-box-single-icon title-anim"><i className="fa-solid fa-user-gear"></i></span>
                                    <div className="pc-service-box-single-content">
                                        <h4 className="pc-service-box-single-content-title title-anim">
                                            <CustomGsapTextSplit>
                                                Pixel Perfect
                                            </CustomGsapTextSplit>
                                        </h4>
                                        <div className="text-anim"><CustomGsapTextSplitLine className="mb-0">Lorem ipsum dolor sit ametcoctetur adipiscing elit, sed do eiusmod tempor incidid</CustomGsapTextSplitLine></div>
                                    </div>
                                </div>
                                <div className="pc-service-box-single main-clr3 mr-110 text-white mb-30">
                                    <span className="pc-service-box-single-icon title-anim"><i className="fa-solid fa-user-gear"></i></span>
                                    <div className="pc-service-box-single-content">
                                        <h4 className="pc-service-box-single-content-title title-anim">
                                            <CustomGsapTextSplit>
                                            Awesome Idea
                                            </CustomGsapTextSplit>
                                        </h4>
                                        <div className="text-anim"><CustomGsapTextSplitLine className="mb-0">Lorem ipsum dolor sit ametcoctetur adipiscing elit, sed do eiusmod tempor incidid</CustomGsapTextSplitLine></div>
                                    </div>
                                </div>
                                <div className="pc-service-box-single ml-110 text-white mb-30">
                                    <span className="pc-service-box-single-icon title-anim"><i className="fa-solid fa-user-gear"></i></span>
                                    <div className="pc-service-box-single-content">
                                        <h4 className="pc-service-box-single-content-title title-anim">
                                            <CustomGsapTextSplit>
                                                Creative Design
                                            </CustomGsapTextSplit>
                                        </h4>
                                        <div className="text-anim"><CustomGsapTextSplitLine className="mb-0">Lorem ipsum dolor sit ametcoctetur adipiscing elit, sed do eiusmod tempor incidid</CustomGsapTextSplitLine></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-6">
                            <div className="pc-service-info-right mb-30">
                               <CustomGsapTextSplit>
                               <span className="pc-about-subtitle text-white title-anim">I'm Professional</span>
                               </CustomGsapTextSplit>
                                <h4 className="pc-about-title text-white mb-20 title-anim">
                                    <CustomGsapTextSplit>
                                    I'm able to design & development anything you want
                                    </CustomGsapTextSplit>
                                </h4>
                                <div className="text-anim">
                                    <CustomGsapTextSplitLine className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipspendirices gravida. Risus commodo viverra maecenas accumsvel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscingcididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </CustomGsapTextSplitLine>
                                </div>
                                <div className="pc-about-info-inner-button mt-25">
                                    <a href="#" className="def-btn btn-hover def-btnrd"><span className="dot"></span> <span className="txt">Read More <i className="fa-solid fa-arrow-right-long"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default SkillSection2