"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import { blogData } from "@/data/Data";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { useAppDispatch } from "@/redux/hooks";
import { toggleBlogModalOpen } from "@/redux/features/blogModalSlice";

const BlogSection = () => {
  const dispatch = useAppDispatch();
  return (
    <section id="Blog">
      <div className="blog-9">
        <div className="container">
          <div className="section-heading-8 section-heading-9">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="row justify-content-end">
                  <div className="col-12">
                    <motion.h6
                      className="pc-title-left"
                      initial={{
                        x: -80,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1.2,
                      }}
                      viewport={{ once: true }}
                    >
                      Blog
                    </motion.h6>
                    <motion.h2
                      className="title-anim mb-5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <CustomGsapTextSplit children="Latest Article" />
                    </motion.h2>
                  </div>
                  <motion.div
                    className="col-xl-7 col-lg-8"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    viewport={{ once: true }}
                  >
                    <CustomGsapTextSplitLine className="title-txt title-anim">
                      As a versatile actor with a passion for storytelling, Ava
                      Elizabeth has captivated audiences with their dynamic
                      performances on both stage and screen.
                    </CustomGsapTextSplitLine>
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-4">
                <BounceAnimatedBtn className="btn-bounce-animated d-flex justify-content-lg-center justify-content-end">
                  <a href="#" className="circle-btn btn-hover">
                    <span className="dot"></span>{" "}
                    <span className="txt">
                      Read
                      <br />
                      More<i className="fa-regular fa-arrow-up-right"></i>
                    </span>
                  </a>
                </BounceAnimatedBtn>
              </div>
            </div>
          </div>
          <div className="row row-gap-lg-0 row-gap-4">
            {blogData.map((item, index) => {
              const handleOpenModal = () => {
                dispatch(toggleBlogModalOpen(item));
              };
              return (
                <div className="col-lg-4 col-md-6 col-10" key={index}>
                  <div className="single-blog-card">
                    <motion.div
                      className="part-img fade_bottom"
                      role="button"
                      onClick={handleOpenModal}
                      initial={{
                        y: 60,
                        opacity: 0,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 + 0.4 * index }}
                    >
                      <img src={item.img} alt="image" />
                      <motion.span
                        className="date"
                        initial={{
                          x: 60,
                          opacity: 0,
                        }}
                        whileInView={{
                          x: 0,
                          opacity: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 + 0.4 * index }}
                      >
                        {item.date}
                      </motion.span>
                    </motion.div>
                    <motion.div
                      className="part-txt title-anim"
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2 + 0.4 * index }}
                    >
                      <h3 className="blog-title">
                        <a role="button" onClick={handleOpenModal}>
                          <CustomGsapTextSplit children={item.title} />
                        </a>
                      </h3>
                      <p>
                        What If We Changed The Concept Of Competition,
                        Comparison, And Success In Dance...
                      </p>
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

export default BlogSection;
