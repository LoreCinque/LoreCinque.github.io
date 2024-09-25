"use client";
import { portfolioData2 } from "@/data/Data";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";

type Props = {
  style: string;
  headingStyle: string;
  btnStyle?: string;
}

const PortfolioSection3 = ({ style, headingStyle, btnStyle } : Props) => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [disabled, setDisabled] = useState(false);
  const filteredData =
    currentCategory === "All"
      ? portfolioData2
      : portfolioData2.filter(
          (item) =>
            item.category.toLowerCase() === currentCategory.toLowerCase()
        );

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
    <section id="Portfolio">
      <div className={`portfolio-sec ${style}`}>
        <div className="container">
          <div className={`section-heading ${headingStyle} text-center`}>
            <h5><CustomGsapTextSplit children="My Portfolio" /></h5>
            <h2><CustomGsapTextSplit children="My Work Example" /></h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 tv-icons-filter-container-tm">
              <ul className="tv-filter-tm">
                <li
                  id="filter__All"
                  className={`${currentCategory === "All" ? "active" : ""} ${btnStyle}`}
                  onClick={() => handleFilterClick("All")}
                >
                  ALL
                </li>
                <li
                  id="filter__Chemicals"
                  className={`${currentCategory === "Chemicals" ? "active" : ""} ${btnStyle}`}
                  onClick={() => handleFilterClick("Chemicals")}
                >
                  WEB DESIGN
                </li>
                <li
                  id="filter__Financial"
                  className={`${currentCategory === "Financial" ? "active" : ""} ${btnStyle}`}
                  onClick={() => handleFilterClick("Financial")}
                >
                  HTML
                </li>
                <li
                  id="filter__Insurance"
                  className={`${currentCategory === "Insurance" ? "active" : ""} ${btnStyle}`}
                  onClick={() => handleFilterClick("Insurance")}
                >
                  DEVELOPMENT
                </li>
                <li
                  id="filter__Manufacturing"
                  className={
                    `${currentCategory === "Manufacturing" ? "active" : ""} ${btnStyle}`
                  }
                  onClick={() => handleFilterClick("Manufacturing")}
                >
                  CSS
                </li>
                <li
                  id="filter__Mining"
                  className={`${currentCategory === "Mining" ? "active" : ""} ${btnStyle}`}
                  onClick={() => handleFilterClick("Mining")}
                >
                  LOGO DESIGN
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-4 g-md-4 tv-case-studies">
            {filteredData.map((item) => (
              <div className={item.className} key={item.index}>
                <motion.div 
                className="tv-card-tm"
                initial={{
                  clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)',
                }}
                whileInView={{
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
                }}
                transition={{
                duration: 1.2,
                ease: 'easeInOut'
                }}
                viewport={{ once: !disabled }} 
                onAnimationComplete={handleAnimationComplete}
                >
                  <a role="button" onClick={() => openLightbox(item.imgSrc)}>
                    <img
                      src={item.imgSrc}
                      alt="Image"
                      className="card-img-big"
                    />
                    <span className="view-icon">+</span>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection3;
