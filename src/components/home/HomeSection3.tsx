"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { toggleSearchModalOpen } from "@/redux/features/searchModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toggleSidebarOpen } from "@/redux/features/sidebarSlice";
const HomeSection3 = () => {
  const dispatch = useAppDispatch();
  const openSearchModal = () => {
    dispatch(toggleSearchModalOpen());
  };
  const openMenu = () => {
    dispatch(toggleSidebarOpen());
  };
  const containerRef = useRef<HTMLDivElement>(null);
  const bannerImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Check if refs are defined
    if (containerRef.current && bannerImageRef.current) {
      // Get container margin and padding
      const containerMargin = parseInt(
        window.getComputedStyle(containerRef.current).marginRight
      );
      const containerPadding = parseInt(
        window.getComputedStyle(containerRef.current).paddingRight
      );

      // Calculate banner image negative margin
      const bannerImageNegativeMargin = containerMargin + containerPadding;

      // Apply styles to banner image
      bannerImageRef.current.style.marginRight = `-${
        bannerImageNegativeMargin - 50
      }px`;
    }
  }, []);
  return (
    <section id="Home">
      <div className="banner-10 fade_left">
        <div className="banner-10-sidebar fade_left_item">
          <motion.div
            className="logo"
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <Link href="/">
              <img src="img/vertical-logo.png" alt="Logo" />
            </Link>
          </motion.div>
          <motion.button
            className="main-menu-btn"
            onClick={openMenu}
            initial={{
              transform: "rotate(-90deg)",
              opacity: 0,
            }}
            animate={{
              transform: "rotate(-90deg)",
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <i className="fa-regular fa-bars-sort"></i> Menu
          </motion.button>
          <motion.button
            className="banner-10-search-box"
            onClick={openSearchModal}
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{ duration: 1.2 }}
          >
            <i className="fa-regular fa-magnifying-glass"></i>
          </motion.button>
        </div>
        <div className="container" ref={containerRef}>
          <div className="row align-items-end">
            <div className="col-lg-8">
              <div className="banner-txt">
                <h4 className="pc-title-left">
                  <CustomGsapTextSplit children="Brian Kevin" />
                  <span className="arrow">
                    <img src="img/arrow-icon.png" alt="arrow" />
                  </span>
                </h4>
                <motion.span
                  className="tag pc-title-left"
                  initial={{
                    x: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                >
                  Professional
                </motion.span>
                <h1 className="pc-title-left">
                  <CustomGsapTextSplit>
                    I'm <span className="color">Fitness</span>
                    <span className="offset"> Trainer</span>
                  </CustomGsapTextSplit>
                </h1>
                <CustomGsapTextSplitLine className="title-anim">
                  During the workout sessions, the trainer provides guidance on
                  proper form and technique for exercises, monitors.
                </CustomGsapTextSplitLine>

                <motion.div
                  className="btn-box fade_bottom"
                  initial={{
                    y: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  <a href="#" className="def-btn btn-hover def-btn-10">
                    <span className="dot"></span>
                    <span className="txt">
                      Join Us <i className="fa-regular fa-arrow-up-right"></i>
                    </span>
                  </a>
                </motion.div>
                <motion.div
                  className="banner-social"
                  initial={{
                    x: 100,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  <span>Follow Me -</span>
                  <div className="social">
                    <a href="#">Fb.</a>
                    <a href="#">Lin.</a>
                    <a href="#">Be.</a>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-4">
              <motion.div
                className="banner-img"
                initial={{
                  x: -40,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                ref={bannerImageRef}
              >
                <img src="img/banner-10-img.png" alt="image" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection3;
