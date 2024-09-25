"use client";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { toggleSidebarClose } from "@/redux/features/sidebarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
type Props = {
  logo: string;
  contactHashlink?: boolean;
};
const SidebarSection = ({ logo, contactHashlink }: Props) => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);
  const closeSidebar = () => {
    dispatch(toggleSidebarClose());
  };
  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
    closeSidebar();
  };
  return (
    <div className={`offcanvas-menu-wrap ${isSidebarOpen ? "active" : ""}`}>
      <div
        className="offcanvas-overlay"
        role="button"
        onClick={closeSidebar}
      ></div>
      <div className="offcanvas-menu">
        <div className="offcanvas-menu-top">
          <div className="logo">
            <Link href="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <button className="close-offcanvas" onClick={closeSidebar}>
            <i className="fa-thin fa-times"></i>
          </button>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <Link href="#Home">Home</Link>
            </li>
            <li>
              <Link href="#About">About</Link>
            </li>
            <li>
              <Link href="#Service">Service</Link>
            </li>
            <li>
              <Link href="#Portfolio">Portfolio</Link>
            </li>
            <li>
              {!contactHashlink ? (
                <a role="button" onClick={openContactModal}>
                  Contact
                </a>
              ) : (
                <Link href="#Contact">Contact</Link>
              )}
            </li>
            <li>
              <Link href="#Blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
