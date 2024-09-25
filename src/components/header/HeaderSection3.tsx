"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleSidebarOpen } from "@/redux/features/sidebarSlice";

type Props = {
  style: string;
  logo: string;
  btnStyle: string;
};
const HeaderSection3 = ({ style, logo, btnStyle }: Props) => {
  const dispatch = useAppDispatch();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);

  const openSidebar = () => {
    dispatch(toggleSidebarOpen());
    setIsHeaderFixed(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSidebarOpen]);
  return (
    <div className="wrapper">
      <header className="header-section-3">
        <nav
          className={`navigation ${style} ${
            isHeaderFixed ? "navbar-fixed" : ""
          }`}
        >
          <div className="container">
            <div className="header-wrapper">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-2">
                  <div className="row align-items-center">
                    <motion.div
                      className="col-lg-12 col-6"
                      initial={{
                        x: -100,
                        opacity: 0,
                      }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <Link href="/" className="logo">
                        <img src={logo} alt="" />
                      </Link>
                    </motion.div>
                    <div className="d-lg-none d-flex justify-content-end col-6">
                      <button
                        className="navbar-toggler"
                        type="button"
                        onClick={openSidebar}
                      >
                        <i className="fa-solid fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="col-xl-9 col-lg-10"
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
                  <nav className="navbar navbar-expand-lg p-0">
                    <div
                      className="collapse navbar-collapse"
                      id="navbarSupportedContent"
                    >
                      <ul className="navbar-nav ms-auto align-items-lg-center">
                        <li className="nav-item">
                          <Link className="nav-link" href="#Home">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#About">
                            About
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#Service">
                            Service
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#Portfolio">
                            Portfolio
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#Contact">
                            Contact
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#Blog">
                            Blog
                          </Link>
                        </li>
                        <li className="nav-btn">
                          <Link
                            href="#"
                            className={`def-btn ${btnStyle} btn-hover`}
                          >
                            <span className="dot"></span>{" "}
                            <span className="txt">Get Started</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </motion.div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderSection3;
