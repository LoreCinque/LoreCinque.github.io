"use client";
import { toggleRightSidebarClose } from "@/redux/features/rightSidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
import Navigation2 from "../header/Navigation2";
import { sidebarData } from "@/data/Data";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
type Props = {
  logo: string;
};
const RightSidebarSection = ({ logo }: Props) => {
  const dispatch = useAppDispatch();
  const isRightSidebarOpen = useAppSelector(
    (state) => state.rightSidebar.isRightSidebarOpen
  );
  const closeRightSidebar = () => {
    dispatch(toggleRightSidebarClose());
  };
  const openLightbox = (src: string) => {
    dispatch(toggleLightboxOpen(src));
  };
  return (
    <>
      <div
        className={`pc-sidebar-info-wrapper side-info ${
          isRightSidebarOpen ? "info-open" : ""
        }`}
      >
        <div className="pc-sidebar-info-inner">
          <div className="row mb-30">
            <div className="col-6">
              <Link href="/" className="pc-sidebar-logo">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-6 text-end">
              <button
                className="pc-sidebar-close side-info-close"
                onClick={closeRightSidebar}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
          <Navigation2 style="mobile-nav" mobile={true} />
          <div className="pc-sidebar-about mb-30">
            <h4 className="pc-sidebar-about-title">About Me</h4>
            <p className="pc-sidebar-short-desc">
              Solutions-oriented developer with 8+ years of experience in
              designing, developing, launching, and maintaining web applications
              for diverse industries. Renowned for leading all aspects of
              website design and development projects, collecting/analyzing user
              requirements, producing top- notch code, creating mock-ups, and
              optimizing designs; drove a 30% increase in sales. Expertise in
              delivering maintainable web-based solutions and optimizing
              user-focused websites for customers by leveraging cutting-edge
              tools and methodologies.
            </p>
          </div>
          <div className="pc-sidebar-contact">
            <h4 className="pc-sidebar-contact-title mb-15">Get In Touch Me</h4>
            <span className="pc-sidebar-contact-meta">
              <i className="fa-solid fa-location-dot"></i>Altstetterplatz 11,
              8048 Zürich Switzerland
            </span>
            <a className="pc-sidebar-contact-meta" href="tel:+41-782-222-26-23">
              <i className="fa-solid fa-phone-flip"></i> +41(0)782222623
            </a>
            <a
              href="mailto:lorenz.dev35@gmail.com"
              className="pc-sidebar-contact-meta"
            >
              <i className="fa-solid fa-envelope"></i> lorenz.dev35@gmail.com
            </a>
            <div className="pc-sidebar-social mt-20">
              <a href="https://www.facebook.com/lorenzo.sacchetti.71/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://x.com/ZarathustraFive">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/lorenz35/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas-overlay ${
          isRightSidebarOpen ? "overlay-open" : ""
        }`}
        role="button"
        onClick={closeRightSidebar}
      ></div>
    </>
  );
};

export default RightSidebarSection;
