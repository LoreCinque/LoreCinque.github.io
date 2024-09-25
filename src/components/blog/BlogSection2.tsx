"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import BounceAnimatedBtn from "../utils/BounceAnimatedBtn";
import { blogData3 } from "@/data/Data";
import { useAppDispatch } from "@/redux/hooks";
import { toggleBlogModalOpen } from "@/redux/features/blogModalSlice";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
const BlogSection2 = () => {
  const firstBlog = blogData3[0];
  const secondBlog = blogData3[1];
  const dispatch = useAppDispatch();
  return (
    <section id="Blog">
      <div className="blog-8">
        <div className="container">
          <div className="section-heading-8">
            <div className="row align-items-center">
              <div className="col-xl-5 col-md-6">
                <motion.h6
                  className="pc-title-left"
                  initial={{
                    x: 80,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                >
                  Blog
                </motion.h6>
                <CustomGsapTextSplit>
                  <h2 className="title-anim">Read Latest Article</h2>
                </CustomGsapTextSplit>
              </div>
              <motion.div
                className="col-lg-4 col-md-6 offset-xl-2 offset-lg-1"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
              >
                <CustomGsapTextSplitLine className="title-txt title-anim">
                  Content writing service is a business or individual that
                  provides written content for websites, blogs, marketing
                  materials, and other these services is to provide.
                </CustomGsapTextSplitLine>
              </motion.div>
            </div>
          </div>
          <div className="row gy-5 align-items-end justify-content-between">
            <div className="col-xl-5 col-md-6 order-md-1 order-2">
              <div className="single-blog-card">
                <motion.div
                  className="part-img fade_bottom"
                  initial={{
                    y: -40,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <a
                    role="button"
                    onClick={() => dispatch(toggleBlogModalOpen(firstBlog))}
                  >
                    <img src={firstBlog.img} alt="image" />
                  </a>
                </motion.div>
                <motion.div
                  className="part-txt"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="blog-8-title title-anim">
                    <a
                      role="button"
                      onClick={() => dispatch(toggleBlogModalOpen(firstBlog))}
                    >
                      <CustomGsapTextSplit>
                        {firstBlog.title}
                      </CustomGsapTextSplit>
                    </a>
                  </h3>

                  <p className="blog-date title-anim">{firstBlog.date}</p>
                </motion.div>
              </div>
              <BounceAnimatedBtn className="section-btn btn-bounce-animated d-flex">
                <a href="#" className="circle-btn btn-hover">
                  <span className="dot"></span>{" "}
                  <span className="txt">
                    Read
                    <br />
                    More <i className="fa-regular fa-arrow-up-right"></i>
                  </span>
                </a>
              </BounceAnimatedBtn>
            </div>
            <div className="col-md-6 order-md-2 order-1">
              <div className="single-blog-card">
                <motion.div
                  className="part-img fade_bottom"
                  initial={{
                    y: -40,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <a
                    role="button"
                    onClick={() => dispatch(toggleBlogModalOpen(secondBlog))}
                  >
                    <img src={secondBlog.img} alt="image" />
                  </a>
                </motion.div>
                <motion.div
                  className="part-txt"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="blog-8-title title-anim">
                    <a
                      role="button"
                      onClick={() => dispatch(toggleBlogModalOpen(secondBlog))}
                    >
                      <CustomGsapTextSplit>
                        {secondBlog.title}
                      </CustomGsapTextSplit>
                    </a>
                  </h3>
                  <p className="blog-date title-anim">{secondBlog.date}</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection2;
