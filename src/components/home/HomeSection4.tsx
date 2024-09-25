"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BannerCounter from "../counter/BannerCounter";
import { useAppDispatch } from "@/redux/hooks";
import { toggleVideoModalOpen } from "@/redux/features/videoModalSlice";
import Link from "next/link";
const HomeSection4 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section id="Home">
      <div className="banner-11">
        <motion.div
          className="banner-11-social"
          initial={{
            y: -50,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.5,
          }}
        >
          <span className="title">Follow Me :</span>
          <div className="social fade_bottom">
            <Link href="https://www.tiktok.com/en/">
              <i className="fa-brands fa-tiktok"></i>
            </Link>
            <Link href="https://twitter.com/">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link href="https://www.instagram.com/">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="https://www.facebook.com/">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
          </div>
        </motion.div>
        <div className="container">
          <div className="row align-items-end justify-content-sm-between justify-content-center">
            <div className="col-10 col-lg-5 col-sm-5 order-1 order-sm-0">
              <motion.div
                className="banner-img"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src="img/banner-11-img.png" alt="image" />
              </motion.div>
            </div>
            <div className="col-10 col-sm-7 col-xl-6 order-0 order-sm-1">
              <div className="banner-txt">
                <h4 className="pc-title-left">
                  <CustomGsapTextSplit>I'm Tom Brady</CustomGsapTextSplit>
                </h4>
                <h1 className="title-anim">
                  <CustomGsapTextSplit>
                    Professional Accountant
                  </CustomGsapTextSplit>
                </h1>
                <motion.div
                  className="btn-box fade_bottom"
                  initial={{
                    y: -50,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  <a href="#" className="def-btn btn-hover def-btn-11">
                    <span className="dot"></span>
                    <span className="txt">Get In Touch</span>
                  </a>
                  <a
                    className="play-btn video-btn"
                    onClick={openVideoModal}
                    role="button"
                  >
                    <i className="fa-light fa-play"></i>
                  </a>
                </motion.div>
                <BannerCounter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection4;
