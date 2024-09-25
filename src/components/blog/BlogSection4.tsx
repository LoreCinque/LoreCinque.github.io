"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";
import CustomImageAnimate from "../utils/CustomImageAnimate";
import { useAppDispatch } from "@/redux/hooks";
import { blogData4 } from "@/data/Data";
import { toggleBlogLandscapeModalOpen } from "@/redux/features/blogLandscapeModalSlice";
const BlogSection4 = () => {
  const dispatch = useAppDispatch();
  return (
    <section id="Blog">
      <div className="blog-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6">
              <div className="section-heading-11 text-center">
                <h2 className="title-anim">
                  <CustomGsapTextSplit>Blog & Influence</CustomGsapTextSplit>
                </h2>
                <CustomGsapTextSplitLine className="title-txt title-anim">
                  Welcome to my website quality accounting services to
                  individuals and businesses alike.
                </CustomGsapTextSplitLine>
              </div>
            </div>
          </div>
          <motion.div
            className="row g-4"
            initial={{
              y: 60,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
            }}
          >
            {blogData4.slice(0, 2).map((item) => {
              const handleBlogOpen = () => {
                dispatch(toggleBlogLandscapeModalOpen(item));
              };
              return (
                <div className="col-lg-4 col-sm-6" key={item.id}>
                  <div className="single-blog-card">
                    <div className="part-img fade_bottom">
                      {item.img && <CustomImageAnimate src={item.img} />}
                    </div>
                    <div className="part-txt title-anim">
                      <div className="blog-info">
                        <span className="blog-category">{item.category}</span>
                        <span className="date">
                          <i className="fa-light fa-clock"></i> {item.date}
                        </span>
                      </div>
                      <h3 className="blog-title">
                        <a role="button" onClick={handleBlogOpen}>
                          <CustomGsapTextSplit>
                            {item.title}
                          </CustomGsapTextSplit>
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="col-lg-4">
              <div className="blog-11-list">
                {blogData4.slice(-3).map((item) => {
                  const handleBlogOpen = () => {
                    dispatch(toggleBlogLandscapeModalOpen(item));
                  };
                  return (
                    <div className="single-blog-card" key={item.id}>
                      <div className="part-txt title-anim">
                        <div className="blog-info">
                          <span className="blog-category">{item.category}</span>
                          <span className="date">
                            <i className="fa-light fa-clock"></i> {item.date}
                          </span>
                        </div>
                        <h3 className="blog-title">
                          <a role="button" onClick={handleBlogOpen}>
                            {" "}
                            <CustomGsapTextSplit>
                              {item.title}
                            </CustomGsapTextSplit>
                          </a>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection4;
