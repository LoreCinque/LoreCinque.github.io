import { Metadata } from "next";
import React from "react";
import { rajdhani } from "./fonts";
import HeaderSection5 from "@/components/header/HeaderSection5";
import RightSidebarSection from "@/components/side-panel/RightSidebarSection";
import HomeSection10 from "@/components/home/HomeSection10";
import AboutSection8 from "@/components/about/AboutSection8";
import CounterSection from "@/components/counter/CounterSection";
import ServiceSection6 from "@/components/service/ServiceSection6";
import ProjectSection from "@/components/project/ProjectSection";
import TestimonialSlider2 from "@/components/slider/TestimonialSlider2";
import VideoSection5 from "@/components/video/VideoSection5";
import BrandSection2 from "@/components/brand/BrandSection2";
import ContactSection3 from "@/components/contact/ContactSection3";
import NewsSection from "@/components/blog/NewsSection";
import FooterSection5 from "@/components/footer/FooterSection5";
import Lightbox from "@/components/modal/Lightbox";
import BlogModalLandscape from "@/components/modal/BlogModalLandscape";
export const metadata: Metadata = {
  title: "Lorenzo Sacchetti Portfolio",
  description: "Developed by Lorenzo Sacchetti",
};
const page = () => {
  return (
    <main className={`homepage-10-main ${rajdhani.className}`}>
      <HeaderSection5 logo="img/lorenzo-logo.png" />
      <RightSidebarSection logo="img/lorenzo-logo.png" />
      <HomeSection10 />
      <AboutSection8 />
      <CounterSection
        style="pc-review-section position-relative bg-cover pt-90 pb-90"
        bgShape="img/half-shape.png"
        darkTheme
      />
      <ServiceSection6 style="homepage-10-service-section" />
      <ProjectSection
        style="homepage-10-project-section"
        btnStyle="main-clr5"
      />
      <TestimonialSlider2 style="homepage-10-testimonial-section" />
      <VideoSection5 style="" />
      <BrandSection2 />
      <ContactSection3
        style="homepage-10-contact-section pc-contact-area pt-120"
        headingStyle=""
        img="img/contact_img.png"
        btnStyle="def-btn-5"
      />
      <NewsSection style="homepage-10-news-section main-clr5" />
      <FooterSection5
        style="main-clr5"
        logo="img/lorenzo-logo.png"
        shapeStyle="d-none"
      />
      <Lightbox />
      <BlogModalLandscape />
    </main>
  );
};

export default page;
