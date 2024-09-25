import React from "react";
import NewsletterSection from "./NewsletterSection";
type Props = {
  sectionOpen: boolean;
  handleClose: () => void;
};

const SubscribePopupSection = ({ sectionOpen, handleClose }: Props) => {
  return (
    <div
      className={`tc-popup-modal ${
        sectionOpen && "active"
      } d-flex justify-content-center align-items-center`}
      id="popup-subscribe"
      data-bgcolor="#1a1f22"
    >
      <button className="tc-popup-close-btn" onClick={handleClose}>
        <i className="fa-solid fa-times"></i>
      </button>
      <section>
        <NewsletterSection style="" btnStyle="def-btn" />
      </section>
    </div>
  );
};

export default SubscribePopupSection;
