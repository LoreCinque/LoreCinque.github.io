"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { blogData2 } from "@/data/Data";
import { useAppDispatch } from "@/redux/hooks";
import { toggleBlogLandscapeModalOpen } from "@/redux/features/blogLandscapeModalSlice";
const BlogSection3 = () => {
  const dispatch = useAppDispatch();
  return (
    <section id="Blog">
      <div className="blog-9 blog-10 bg-dark bg-opacity-25">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <motion.div
                className="section-heading-8 section-heading-10 text-center"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <h2 className="mb-4">
                  <CustomGsapTextSplit>Article & News</CustomGsapTextSplit>
                </h2>
                <CustomGsapTextSplitLine className="title-txt">
                  Aerobics is a form of cardiovascular exercise that involves a
                  combination of rhythmic movements, dance-like steps, and
                  repetitive motions
                </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
          <div className="row g-4 justify-content-center justify-content-lg-start">
            {blogData2.map((item) => {
              const handleBlogOpen = () => {
                dispatch(toggleBlogLandscapeModalOpen(item));
              };
              return (
                <div className="col-lg-6 col-sm-10 col-12" key={item.id}>
                  <div className="single-blog-card">
                    <motion.div
                      className="part-img fade_bottom"
                      role="button"
                      onClick={handleBlogOpen}
                      initial={{
                        y: 60,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 + 0.2 * item.id }}
                    >
                      <img src={item.img} alt="image" />
                      <span className="date">
                        <span>{item.day}</span>
                        {item.month}
                      </span>
                    </motion.div>
                    <motion.div
                      className="part-txt title-anim"
                      initial={{
                        y: 60,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4 + 0.2 * item.id }}
                    >
                      <span className="blog-category">{item.category}</span>
                      <h3 className="blog-title">
                        <a role="button" onClick={handleBlogOpen}>
                          <CustomGsapTextSplit>
                            {item.title}
                          </CustomGsapTextSplit>
                          <i className="fa-regular fa-arrow-up-right"></i>
                        </a>
                      </h3>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection3;
