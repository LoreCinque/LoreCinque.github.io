import React from "react";
import ServiceSection6 from "../service/ServiceSection6";
type Props = {
  sectionOpen: boolean;
  handleClose: () => void;
};
const FeaturePopupSection = ({ sectionOpen, handleClose }: Props) => {
  return (
    <div
      className={`tc-popup-modal ${sectionOpen && "active"}`}
      id="popup-feature"
      data-bgcolor="#102a3c"
    >
      <button className="tc-popup-close-btn" onClick={handleClose}>
        <i className="fa-solid fa-times"></i>
      </button>
      <ServiceSection6 />
    </div>
  );
};

export default FeaturePopupSection;
