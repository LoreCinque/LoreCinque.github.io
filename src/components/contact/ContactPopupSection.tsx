import React from "react";
import ContactSection3 from "./ContactSection3";
type Props = {
  sectionOpen: boolean;
  handleClose: () => void;
};
const ContactPopupSection = ({ sectionOpen, handleClose }: Props) => {
  return (
    <div
      className={`tc-popup-modal ${sectionOpen && "active"}`}
      id="popup-contact"
      data-bgcolor="#1a1f22"
    >
      <button
        className="tc-popup-close-btn"
        onClick={handleClose}
        data-close="popup-contact"
      >
        <i className="fa-solid fa-times"></i>
      </button>
      <ContactSection3
        style="contact_us pt-120"
        headingStyle=""
        btnStyle=""
        img="img/img-7.png"
        btnCentered
      />
    </div>
  );
};

export default ContactPopupSection;
