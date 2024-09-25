import React from "react";
import NewsSection from "../blog/NewsSection";
type Props = {
  sectionOpen: boolean;
  handleClose: () => void;
};
const NewsPopupSection = ({ sectionOpen, handleClose }: Props) => {
    
  return (
    <div
      className={`tc-popup-modal ${sectionOpen && "active"}`}
      id="popup-news"
      data-bgcolor="#1a1f22"
    >
      <button className="tc-popup-close-btn" onClick={handleClose}>
        <i className="fa-solid fa-times"></i>
      </button>
      <NewsSection 
      style="home-page-7-news-popup main-clr5"
      />
    </div>
  );
};

export default NewsPopupSection;
