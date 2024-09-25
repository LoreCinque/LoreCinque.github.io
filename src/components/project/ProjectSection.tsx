"use client";
import { projectData } from "@/data/Data";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
import { motion } from "framer-motion";
import { useAppDispatch } from "@/redux/hooks";
import Masonry from "@mui/lab/Masonry";
import React, { useState } from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";

type Props = {
  style: string;
  btnStyle?: string;
};

const ProjectSection = ({ style, btnStyle }: Props) => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [disabled, setDisabled] = useState(false);

  const filteredData =
    currentCategory === "All"
      ? projectData
      : projectData.filter((item) => item.category.includes(currentCategory));

  const handleFilterClick = (category: string) => {
    setDisabled(true);
    setCurrentCategory(category);
  };

  const handleAnimationComplete = () => {
    setDisabled(false); // Re-enable viewport after animation completes
  };

  const dispatch = useAppDispatch();
  const openLightbox = (src: string) => {
    dispatch(toggleLightboxOpen(src));
  };
  return (
    <div
      className={`portfolio_area filter-wrapper p-rel ${style}`}
      data-bgcolor="#061319"
      id="Portfolio"
    >
      <div className="portfolio_area_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading section-heading-2 text-center">
                <h5 className="text-white">
                  <CustomGsapTextSplit>My Works</CustomGsapTextSplit>
                </h5>
                <h2 className="text-white">
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
                } def-btn btn-hover ${btnStyle}`}
                onClick={() => handleFilterClick("All")}
              >
                <span className="dot"></span> <span className="txt">All</span>
              </button>
              <button
                className={`${
                  currentCategory === "fe" ? "active" : ""
                } def-btn btn-hover ${btnStyle}`}
                onClick={() => handleFilterClick("fe")}
              >
                <span className="dot"></span>{" "}
                <span className="txt">Frontend Development</span>
              </button>
              <button
                className={`${
                  currentCategory === "be" ? "active" : ""
                } def-btn btn-hover ${btnStyle}`}
                onClick={() => handleFilterClick("be")}
              >
                <span className="dot"></span>{" "}
                <span className="txt">Backend Development</span>
              </button>
            </div>
            <div className="portfolio_items">
              <div className="row filter-grid portfolio_fillter">
                <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
                  {filteredData.map((item) => (
                    <motion.div
                      className="grid-item"
                      key={item.id}
                      initial={{
                        clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)",
                      }}
                      whileInView={{
                        clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
                      }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                      }}
                      viewport={{ once: !disabled }}
                      onAnimationComplete={handleAnimationComplete}
                    >
                      <div className="portfolio_item">
                        <div className="portfolio_item_inner fix">
                          <a
                            className="popup-image"
                            role="button"
                            onClick={() => openLightbox(item.img)}
                          >
                            <div className="item_img">
                              <img
                                srcSet={item.img}
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div
                            className={`portfolio_item_inner_text ${btnStyle}`}
                          >
                            <a
                              role="button"
                              onClick={() => openLightbox(item.img)}
                              className="item_text"
                            >
                              {item.title}
                            </a>
                            <a href="#" className="item_cat">
                              {item.titleCategory}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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

export default ProjectSection;
