import React from "react";
import { skillData } from "@/data/Data";
import CustomCircularProgressbar from "../utils/CustomCircularProgressbar";
type Props = {
  sectionOpen: boolean;
  handleClose: () => void;
};

const SkillPopupSection = ({ sectionOpen, handleClose }: Props) => {
  return (
    <div
      className={`tc-popup-modal ${sectionOpen && "active"}`}
      id="popup-skill"
    >
      <button className="tc-popup-close-btn" onClick={handleClose}>
        <i className="fa-solid fa-times"></i>
      </button>
      <section>
        <div className="progressbar-sec">
          <div className="container">
            <div className="progressbar">
              <div className="row g-4">
                {skillData.map((item) => (
                  <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
                    <div className="box mb-30">
                      <div className="chart" data-percent="89">
                        <CustomCircularProgressbar
                          value={item.value}
                          circleColor="#4cb950"
                          textColor="#fff"
                        />
                      </div>
                      <h2>{item.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillPopupSection;
