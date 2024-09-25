"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { brandData2 } from "@/data/Data";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import VideoBoxAnimation from "./VideoBoxAnimation";
const VideoSection2 = () => {
  return (
    <section>
      <div className="video-8">
        <div className="container">
          <VideoBoxAnimation/>
        </div>
        <div className="brands-8">
          <div className="container">
            <div className="row align-items-center row-gap-4 row-gap-lg-0">
              <div className="col-lg-5">
                <div className="brands-part-txt">
                  <motion.h2 
                  className="title-anim"
                  initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    viewport={{once: true}}
                  >
                    <CustomGsapTextSplit children="Worked With Global Largest Brands" />
                  </motion.h2>
                  <motion.div
                   initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    viewport={{once: true}}
                  >
                    <CustomGsapTextSplitLine className="title-anim">
                      Unique identity and image associated with a company
                      product, service, or individual. It helps to differentiate
                      from competitors and create a perception.
                  </CustomGsapTextSplitLine>
                  </motion.div>
                  
                  <motion.ul
                  initial={{
                    x: -50,
                    opacity: 0
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1
                  }}
                  transition={{
                    duration: 1.2
                  }}
                  viewport={{once: true}}
                  >
                    <li className="title-anim">
                      <span>
                        <i className="fa-regular fa-plus"></i>
                      </span>{" "}
                      Ability to write in a clear and concise manner.
                    </li>
                    <li className="title-anim">
                      <span>
                        <i className="fa-regular fa-plus"></i>
                      </span>{" "}
                      Knowledge of tone, style, and branding.
                    </li>
                  </motion.ul>
                </div>
              </div>
              <div className="col-lg-7">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                        {brandData2.slice(0,5).map((item) => (
                        <td key={item.id}>
                            <motion.a 
                            href="#" 
                            className="title-anim"
                            initial={{
                                y: 30,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{duration: 1.2 + item.id * 0.1}}
                            viewport={{once: true}}
                            >
                                <img src={item.img} alt={`brand ${item.id}`} />
                            </motion.a>
                        </td>    
                        ))}
                      
                    </tr>
                    <tr>
                        {brandData2.slice(-5).map((item) => (
                        <td key={item.id}>
                            <motion.a 
                            href="#" 
                            className="title-anim"
                            initial={{
                                y: 30,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{duration: 1 + item.id * 0.1}}
                            viewport={{once: true}}
                            >
                                <img src={item.img} alt={`brand ${item.id}`} />
                            </motion.a>
                        </td>    
                        ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection2;
