"use client";
import React from "react";
import AboutPopupSection from "../about/AboutPopupSection";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { closeAllSections } from "@/redux/features/sectionSlice";
import SkillPopupSection from "../skills/SkillPopupSection";
import ServicePopupSection from "../service/ServicePopupSection";
import FeaturePopupSection from "../featured/FeaturePopupSection";
import ProjectPopupSection from "../project/ProjectPopupSection";
import ContactPopupSection from "../contact/ContactPopupSection";
import BlogPopupSection from "../blog/BlogPopupSection";
import SubscribePopupSection from "../newsletter/SubscribePopupSection";
import PortfolioPopupSection from "../portfolio/PortfolioPopupSection";
import NewsPopupSection from "../blog/NewsPopupSection";

const AllPopupSection = () => {
  const section = useAppSelector((state) => state.section);
  const dispatch = useAppDispatch();

  const handleCloseAllSections = () => {
    dispatch(closeAllSections());
  };
  return (
    <>
      <div
        className={`tc-all-popup-overlay ${section.anySectionOpen && "active"}`}
        role="button"
        onClick={handleCloseAllSections}
      ></div>
      <div className="tc-all-popup-wrap">
        <AboutPopupSection
          sectionOpen={section.about}
          handleClose={handleCloseAllSections}
        />
        <SkillPopupSection
          sectionOpen={section.skill}
          handleClose={handleCloseAllSections}
        />
        <ServicePopupSection
          sectionOpen={section.service}
          handleClose={handleCloseAllSections}
        />
        <FeaturePopupSection
          sectionOpen={section.feature}
          handleClose={handleCloseAllSections}
        />
        <PortfolioPopupSection
          sectionOpen={section.portfolio}
          handleClose={handleCloseAllSections}
        />
        <ProjectPopupSection
          sectionOpen={section.project}
          handleClose={handleCloseAllSections}
        />
        <ContactPopupSection
          sectionOpen={section.contact}
          handleClose={handleCloseAllSections}
        />
        <BlogPopupSection
          sectionOpen={section.blog}
          handleClose={handleCloseAllSections}
        />
        <NewsPopupSection
          sectionOpen={section.news}
          handleClose={handleCloseAllSections}
        />
        <SubscribePopupSection
          sectionOpen={section.subscribe}
          handleClose={handleCloseAllSections}
        />
      </div>
    </>
  );
};

export default AllPopupSection;
