"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation2 from "./Navigation2";
import { useAppDispatch } from "@/redux/hooks";
import { toggleRightSidebarOpen } from "@/redux/features/rightSidebarSlice";
import { toggleSearchModalOpen } from "@/redux/features/searchModalSlice";
const HeaderSection2 = () => {
  const dispatch = useAppDispatch();
  const openRightSidebar = () => {
    dispatch(toggleRightSidebarOpen());
  };
  const openSearchModal = () => {
    dispatch(toggleSearchModalOpen());
  };
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="wrapper">
      <header>
        <nav
          className={`navigation navigation-11 ${
            isHeaderFixed && "navbar-fixed"
          }`}
        >
          <div className="top-header">
            <div className="container">
              <div className="row g-2">
                <motion.div
                  className="col-sm-6 d-flex justify-content-center justify-content-sm-start"
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  <ul>
                    <li>
                      <i className="fa-light fa-envelope"></i> example@gmail.com
                    </li>
                    <li>
                      <i className="fa-light fa-clock"></i> Sunday-Thurs
                      10am-4pm
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="col-sm-6 d-flex justify-content-center justify-content-sm-end"
                  initial={{
                    x: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  <ul>
                    <li>
                      <i className="fa-light fa-location-dot"></i> 47 Bakery
                      Street, London, UK
                    </li>
                    <li>
                      <select>
                        <option value="eng">English</option>
                        <option value="ban">Bangla</option>
                      </select>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header-wrapper">
              <div className="row">
                <motion.div
                  className="col-lg-2"
                  initial={{
                    x: -80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  <div className="row h-100">
                    <div className="col-lg-12 col-sm-3 col-4">
                      <Link
                        href="/"
                        className="logo h-100 align-items-center d-flex"
                      >
                        <img src="img/logo-11.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="d-lg-none d-flex justify-content-end col-sm-9 col-8 gap-4">
                      <a
                        href="#contact"
                        className="def-btn btn-hover def-btn-11"
                      >
                        <span className="dot"></span>{" "}
                        <span className="txt">Contact Me</span>
                      </a>
                      <button
                        className="home-11-search-box"
                        onClick={openSearchModal}
                      >
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                      <button
                        className="pc-navbar-toggler side-toggle"
                        onClick={openRightSidebar}
                      >
                        <span className="pc-navbar-line pc-navbar-line1"></span>
                        <span className="pc-navbar-line pc-navbar-line2"></span>
                        <span className="pc-navbar-line pc-navbar-line3"></span>
                      </button>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="col-lg-7"
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                  }}
                >
                  <Navigation2 style="" mobile={false} />
                </motion.div>
                <motion.div
                  className="col-lg-3 d-flex justify-content-end"
                  initial={{
                    x: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                  }}
                >
                  <div className="nav-btn d-lg-flex d-none justify-content-end align-items-center">
                    <Link href="#contact" className="def-btn btn-hover def-btn-11">
                      <span className="dot"></span>{" "}
                      <span className="txt">Contact Me</span>
                    </Link>
                    <button
                      className="home-11-search-box"
                      onClick={openSearchModal}
                    >
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                    <button
                      className="pc-navbar-toggler side-toggle"
                      onClick={openRightSidebar}
                    >
                      <span className="pc-navbar-line pc-navbar-line1"></span>
                      <span className="pc-navbar-line pc-navbar-line2"></span>
                      <span className="pc-navbar-line pc-navbar-line3"></span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderSection2;
