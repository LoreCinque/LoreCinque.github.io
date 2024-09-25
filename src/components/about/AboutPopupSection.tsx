import React from 'react'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit';
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine';
type Props = {
    sectionOpen : boolean;
    handleClose: () => void;
}
const AboutPopupSection = ({sectionOpen,handleClose} : Props) => {
  return (
    <div className={`tc-popup-modal ${sectionOpen && 'active'}`} id="popup-about">
            <button 
            className="tc-popup-close-btn"
            onClick={handleClose}
            ><i className="fa-solid fa-times"></i></button>
            <div id="About" className="fix">
                <div className="project-wrapper">
                    <div className="animated-shape shape-2">
                        <div className="layer-1"></div>
                        <div className="layer-2"></div>
                        <div className="layer-3"></div>
                        <div className="layer-4"></div>
                        <div className="layer-5"></div>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-5">
                                <div className="project-image">
                                    <img src="img/03_home.png" alt="Image" className="project-img"/>
                                    <div className="animate">
                                        <img src="img/Z-index.png" alt="frame"/>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-7">
                                <div className="project-content">
                                    <div className="section-heading">
                                        <h5 className="title-anim">
                                            <CustomGsapTextSplit children="ABOUT ME" />
                                        </h5>
                                        <h2 className="title-anim">
                                            <CustomGsapTextSplit>
                                                Why Hire Me for Your <br/> Next Project?
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
                                    <div className="project-btn" id="btn_wrapper">
                                        <a href="#" className="def-btn">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutPopupSection