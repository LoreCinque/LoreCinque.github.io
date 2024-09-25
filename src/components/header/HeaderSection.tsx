"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { toggleSidebarOpen } from "@/redux/features/sidebarSlice";
import { usePathname } from "next/navigation";

type Props = {
  contactModal: boolean;
};

const HeaderSection = ({ contactModal }: Props) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);

  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
  };

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
      <header>
        <nav
          className={`navigation navigation-8 ${
            isHeaderFixed ? "navbar-fixed" : ""
          }`}
        >
          <div
            className={`container ${
              pathname === "/" ? "container-sm" : "container-lg"
            }`}
          >
            <div className="header-wrapper">
              <div className="row align-items-center">
                <motion.div
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
                  className="col-xl-3 col-lg-2"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-12 col-6">
                      <Link href="/" className="logo">
                        <img src="img/logo-8.png" alt="Logo" />
                      </Link>
                    </div>
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
                </motion.div>
                <motion.div
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
                  className="col-xl-9 col-lg-10"
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
                          {contactModal ? (
                            <a
                              className="nav-link"
                              role="button"
                              onClick={openContactModal}
                            >
                              Contact
                            </a>
                          ) : (
                            <Link className="nav-link" href="#Contact">
                              Contact
                            </Link>
                          )}
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="#Blog">
                            Blog
                          </Link>
                        </li>
                        <li className="nav-btn">
                          <Link
                            href="#"
                            className="def-btn btn-hover def-btn-8"
                          >
                            <span className="dot"></span>{" "}
                            <span className="txt">Download CV</span>
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

export default HeaderSection;
