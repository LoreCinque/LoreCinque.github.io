import React from "react";
import { motion } from "framer-motion";
import CustomImageAnimate from "../utils/CustomImageAnimate";
import { toggleLightboxOpen } from "@/redux/features/lightboxSlice";
import { useAppDispatch } from "@/redux/hooks";
type Props = {
  src: string;
  projectName: string;
  releaseDate: string;
};

const PortfolioBox = ({ src, projectName, releaseDate }: Props) => {
  const dispatch = useAppDispatch();
  const openLightbox = () => {
    dispatch(toggleLightboxOpen(src));
  };
  return (
    <div className="portfolio-9-box image-animation">
      <div className="part-img" role="button" onClick={openLightbox}>
        <CustomImageAnimate src={src} />
      </div>
      <motion.div
        className="part-txt title-anim"
        initial={{
          y: -50,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
      >
        <h3 className="project-name">
          <a type="button" onClick={openLightbox}>
            {projectName}
          </a>
        </h3>
        <span className="release-date">{releaseDate}</span>
      </motion.div>
    </div>
  );
};

export default PortfolioBox;
