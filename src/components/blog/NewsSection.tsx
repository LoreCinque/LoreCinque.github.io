"use client";
import { blogData6 } from "@/data/Data";
import { toggleBlogLandscapeModalOpen } from "@/redux/features/blogLandscapeModalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { motion } from "framer-motion";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";

type Props = {
  style: string;
};

const NewsSection = ({ style }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className={`${style} pc-blog-area pt-120 pb-80`} id="Blog">
      <div className="container">
        <div className="row">
          <div className="section-heading text-center">
            <h5>
              <CustomGsapTextSplit>Update Newsfeed</CustomGsapTextSplit>
            </h5>
            <h2>
              <CustomGsapTextSplit>Update From Newsfeeds</CustomGsapTextSplit>
            </h2>
          </div>
        </div>
        <div className="row">
          {blogData6.map((item) => {
            const toggleBlogModalOpen = () => {
              dispatch(toggleBlogLandscapeModalOpen(item));
            };
            return (
              <motion.div
                className="col-xl-4 col-lg-4 col-md-6"
                key={item.id}
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2 + 0.2 * item.id,
                  ease: "easeIn",
                }}
                viewport={{ once: true }}
              >
                <div className="pc-blog-single mb-40 ">
                  <div className="pc-blog-single-img">
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="pc-blog-single-content">
                    <h4 className="pc-blog-single-content-title">
                      <a
                        role="button"
                        onClick={toggleBlogModalOpen}
                        className="pc-blog-single-content-anchor-tag"
                      >
                        {item.title}
                      </a>
                    </h4>
                    <p>
                      Drive your business and manage ris with a global industry
                      leader.
                    </p>
                    <div className="pc-blog-buttons-wrap">
                      <span className="pc-blog-meta">{item.date}</span>
                      <a
                        role="button"
                        onClick={toggleBlogModalOpen}
                        className="pc-blog-single-btn"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
