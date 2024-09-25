"use client";
import {
  toggleSidePanelClose,
  toggleSidePanelOpen,
} from "@/redux/features/sidePanelSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const SidePanelSection = () => {
  const dispatch = useAppDispatch();
  const isSidePanelOpen = useAppSelector(
    (state) => state.sidePanel.isSidePanelOpen
  );
  const toggleOpenPanel = () => {
    dispatch(toggleSidePanelOpen());
  };
  const toggleClosePanel = () => {
    dispatch(toggleSidePanelClose());
  };
  return (
    <>
      <div
        className={`overlay ${isSidePanelOpen ? "overlay-visible" : ""}`}
        role="button"
        onClick={toggleClosePanel}
      ></div>
      <div className="side-admin-panel">
        <button className="side-admin-settings" onClick={toggleOpenPanel}>
          <i className="fas fa-cog rotate-animation"></i>
        </button>
        <div
          className={`side-admin-panel-right ${
            isSidePanelOpen ? "side-admin-panel-visible" : ""
          }`}
        >
          <div className="side-admin-demo-select">
            <div className="side-setting-top mb-30">
              <h4>Select Demo</h4>
              <button
                className="cinkes-side-admin-panel-close-btn"
                onClick={toggleClosePanel}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="side-admin-demo-wrapper">
              <div className="site-admin-demo-single">
                <Link href="/">
                  <img src="img/admin/demo-1.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/">Actor/Model</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-2">
                  <img src="img/admin/demo-2.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-2">Content Writer</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-3">
                  <img src="img/admin/demo-3.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-3">Trainer</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-4">
                  <img src="img/admin/demo-4.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-4">Accountant</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-5">
                  <img src="img/admin/demo-5.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-5">Web Developer</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-6">
                  <img src="img/admin/demo-6.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-6">Web Designer</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-7">
                  <img src="img/admin/demo-7.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-7">Aesthetic</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-8">
                  <img src="img/admin/demo-8.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-8">Marketer</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-9">
                  <img src="img/admin/demo-9.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-9">Photographer</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-10">
                  <img src="img/admin/demo-10.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-10">Freelancer</Link>
                </h4>
              </div>
              <div className="site-admin-demo-single">
                <Link href="/home-11">
                  <img src="img/admin/demo-11.jpg" alt="img" />
                </Link>
                <h4 className="demo-single-title">
                  <Link href="/home-11">Doctor</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanelSection;
