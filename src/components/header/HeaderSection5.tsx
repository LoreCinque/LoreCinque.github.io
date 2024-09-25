"use client";
import { toggleRightSidebarOpen } from "@/redux/features/rightSidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  logo: string;
};

const HeaderSection5 = ({ logo }: Props) => {
  const dispatch = useAppDispatch();

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const isRightSidebarOpen = useAppSelector(
    (state) => state.rightSidebar.isRightSidebarOpen
  );

  const toggleSidebar = () => {
    dispatch(toggleRightSidebarOpen());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200 && !isRightSidebarOpen) {
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
      if (window.scrollY >= 200 && !isRightSidebarOpen) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRightSidebarOpen]);
  return (
    <div className="wrapper">
      <header>
        <nav className={`navigation ${isHeaderFixed ? "navbar-fixed" : ""}`}>
          <div className="container">
            <div className="header-wrapper">
              <div className="row align-items-center">
                <motion.div
                  className="col-6"
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  <Link href="/" className="logo">
                    <img src={logo} alt="" />
                  </Link>
                </motion.div>
                <motion.div
                  className="col-6 d-flex justify-content-end"
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
                  <button
                    className="pc-navbar-toggler side-toggle"
                    onClick={toggleSidebar}
                  >
                    <span className="pc-navbar-line pc-navbar-line1"></span>
                    <span className="pc-navbar-line pc-navbar-line2"></span>
                    <span className="pc-navbar-line pc-navbar-line3"></span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderSection5;
