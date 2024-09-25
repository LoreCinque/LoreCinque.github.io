"use client";

import ProjectSection from "./ProjectSection";

type Props = {
  sectionOpen: boolean;
  handleClose: () => void;
};

const ProjectPopupSection = ({ sectionOpen, handleClose }: Props) => {
  return (
    <div
      className={`tc-popup-modal ${sectionOpen && "active"}`}
      id="popup-projects"
      data-bgcolor="#1a1f22"
    >
      <button
        className="tc-popup-close-btn"
        onClick={handleClose}
        data-close="popup-projects"
      >
        <i className="fa-solid fa-times"></i>
      </button>

      <ProjectSection
        style="popup-project-section pt-120 pb-90"
        btnStyle="main-clr5"
      />
    </div>
  );
};

export default ProjectPopupSection;
