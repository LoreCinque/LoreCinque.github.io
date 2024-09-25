'use client'
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { useAppDispatch } from "@/redux/hooks";
import { toggleSection } from "@/redux/features/sectionSlice";
interface OpenSectionState {
    about: boolean;
    skill: boolean;
    service: boolean;
    feature: boolean;
    portfolio: boolean;
    project: boolean;
    blog: boolean;
    news: boolean;
    contact: boolean;
    subscribe: boolean;
    _persist?: OpenSectionState;
  }
const HomeSection7 = () => {
    const dispatch = useAppDispatch()
    const handleToggleSection = (section: keyof OpenSectionState) => {
        dispatch(toggleSection(section));
      };
  return (
    <div className="pc-landing-area pt-160 pb-65">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap section-btn mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('about')}
            >
              <div className="front">
                <div className="pc-landing-box purple">
                  <div className="icon">
                    <i className="fa-solid fa-address-card"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">About Me</h4>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="pc-landing-box-img">
                  <img src="img/box-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('skill')}
            >
              <div className="front">
                <div className="pc-landing-box-img">
                  <img src="img/box-2.png" alt="" />
                </div>
              </div>
              <div className="back has-content">
                <div className="pc-landing-box purple">
                  <div className="icon">
                    <i className="fa-solid fa-address-card"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Skill</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-6">
            <div className="pc-landing-card-text banner-heading pb-30 pb-lg-0">
              <h4 className="title white-text">
                <CustomGsapTextSplit>
                  <span className="pc-title-left">Boost your business SEO</span>
                  <br />
                  <span className="pc-title-right">up to high level</span>
                </CustomGsapTextSplit>
              </h4>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('service')}
            >
              <div className="front">
                <div className="pc-landing-box-img">
                  <img src="img/box-1.png" alt="" />
                </div>
              </div>
              <div className="back has-content">
                <div className="pc-landing-box purple">
                  <div className="icon">
                    <i className="fa-solid fa-address-card"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">service</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('feature')}
            >
              <div className="front">
                <div className="pc-landing-box red">
                  <div className="icon">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Feature</h4>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="pc-landing-box-img">
                  <img src="img/box-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('portfolio')}
            >
              <div className="front">
                <div className="pc-landing-box-img">
                  <img src="img/box-3.png" alt="" />
                </div>
              </div>
              <div className="back has-content">
                <div className="pc-landing-box red">
                  <div className="icon">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Portfolio</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('project')}
            >
              <div className="front">
                <div className="pc-landing-box green">
                  <div className="icon">
                    <i className="fa-solid fa-image"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Projects</h4>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="pc-landing-box-img">
                  <img src="img/box-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('blog')}
            >
              <div className="front">
                <div className="pc-landing-box purple">
                  <div className="icon">
                    <i className="fa-regular fa-pen-to-square"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Blog</h4>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="pc-landing-box-img">
                  <img src="img/box-2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div className="pc-landing-social-box mb-30">
              <a href="#" className="home-7-fb-icon">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="home-7-twt-icon">
                <i className="fab fa-x-twitter"></i>
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="home-7-pin-icon">
                <i className="fab fa-pinterest-p"></i>
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#" className="home-7-link-icon">
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 offset-xxl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('news')}
            >
              <div className="front">
                <div className="pc-landing-box-img">
                  <img src="img/box-4.png" alt="" />
                </div>
              </div>
              <div className="back has-content">
                <div className="pc-landing-box orange">
                  <div className="icon">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">News</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('contact')}>
              <div className="front">
                <div className="pc-landing-box black-text orange">
                  <div className="icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Contact</h4>
                  </div>
                </div>
              </div>
              <div className="back">
                <div className="pc-landing-box-img">
                  <img src="img/box-1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-6">
            <div 
            className="pc-landing-card-rotate-wrap mb-30 section-btn"
            role="button"
            onClick={() => handleToggleSection('subscribe')}
            >
              <div className="front">
                <div className="pc-landing-box-img">
                  <img src="img/box-5.png" alt="" />
                </div>
              </div>
              <div className="back has-content">
                <div className="pc-landing-box orange">
                  <div className="icon">
                    <i className="fa-solid fa-lightbulb"></i>
                  </div>
                  <div className="content">
                    <h4 className="title">Subscribe</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection7;
