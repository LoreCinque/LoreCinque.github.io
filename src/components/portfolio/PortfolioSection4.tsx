"use client";
import { portfolioData3 } from "@/data/Data";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomImageAnimate from "../utils/CustomImageAnimate";

const PortfolioSection4 = () => {
  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredData =
    currentCategory === "All"
      ? portfolioData3
      : portfolioData3.filter((item) =>
          item.category.includes(currentCategory)
        );

  const handleFilterClick = (category: string) => {
    setCurrentCategory(category);
  };

  const dispatch = useAppDispatch();
  const openLightbox = (src: string) => {
    dispatch(toggleLightboxOpen(src));
  };
  return (
    <div
      className="portfolio_area filter-wrapper p-rel pt-120 pb-90"
      id="Portfolio"
    >
      <div className="portfolio_area_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading section-heading-2 text-center">
                <h5 className="text-white title-anim">
                  <CustomGsapTextSplit>My Works</CustomGsapTextSplit>
                </h5>
                <h2 className="text-white title-anim">
                  <CustomGsapTextSplit>
                    Exclusive Work Examples
                  </CustomGsapTextSplit>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="portfolio_wrapper p-rel">
            <div className="portfolio_nav filter-nav mb-30 text-center">
              <button
                className={`${
                  currentCategory === "All" ? "active" : ""
                } def-btn btn-hover main-clr4`}
                onClick={() => handleFilterClick("All")}
              >
                <span className="dot"></span>
                <span className="txt">All</span>
              </button>
              <button
                className={`${
                  currentCategory === "model" ? "active" : ""
                } def-btn btn-hover main-clr4`}
                onClick={() => handleFilterClick("model")}
              >
                <span className="dot"></span>
                <span className="txt">Model</span>
              </button>
              <button
                className={`${
                  currentCategory === "photography" ? "active" : ""
                } def-btn btn-hover main-clr4`}
                onClick={() => handleFilterClick("photography")}
              >
                <span className="dot"></span>{" "}
                <span className="txt">Photography</span>
              </button>
              <button
                className={`${
                  currentCategory === "video" ? "active" : ""
                } def-btn btn-hover main-clr4`}
                onClick={() => handleFilterClick("video")}
              >
                <span className="dot"></span>
                <span className="txt">Video</span>
              </button>
              <button
                className={`${
                  currentCategory === "studio" ? "active" : ""
                } def-btn btn-hover main-clr4`}
                onClick={() => handleFilterClick("studio")}
              >
                <span className="dot"></span>
                <span className="txt">Studio</span>
              </button>
            </div>
            <div className="portfolio_items">
              <div className="row filter-grid portfolio_fillter">
                <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
                  {filteredData.map((item) => (
                    <div className="grid-item" key={item.id}>
                      <div className="portfolio_item">
                        <div className="portfolio_item_inner fix">
                          <a
                            className="popup-image"
                            role="button"
                            onClick={() => openLightbox(item.img)}
                          >
                            <div className="item_img">
                              <CustomImageAnimate src={item.img} />
                            </div>
                          </a>
                          <div className="portfolio_item_inner_text">
                            <a
                              className="item_text"
                              role="button"
                              onClick={() => openLightbox(item.img)}
                            >
                              {item.title}
                            </a>
                            <a href="#" className="item_cat">
                              {item.itemCategory}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection4;
