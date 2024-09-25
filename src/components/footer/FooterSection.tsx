"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { useAppDispatch } from "@/redux/hooks";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
const FooterSection = () => {
  const dispatch = useAppDispatch();
  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
  };
  return (
    <section>
      <footer className="footer-8 footer-9">
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-between gx-0 row-gap-5 row-gap-md-0">
              <div className="col-xl-4 col-lg-5 col-md-5">
                <motion.h2
                  className="footer-9-title title-anim"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "linear" }}
                >
                  <CustomGsapTextSplit children="Let's Talk" />
                </motion.h2>
                <motion.button
                  className="def-btn btn-hover def-btn-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  onClick={openContactModal}
                >
                  <span className="dot"></span>
                  <span className="txt">
                    Click to contact{" "}
                    <i className="fa-light fa-arrow-up-right"></i>
                  </span>
                </motion.button>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="row row-gap-lg-0 row-gap-5">
                  <div className="col-lg-4">
                    <div className="footer-menu">
                      <motion.h3
                        className="footer-heading title-anim"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "linear" }}
                        viewport={{ once: true }}
                      >
                        <CustomGsapTextSplit children="Quick Link" />
                      </motion.h3>
                      <motion.ul
                        className="footer-menu-list"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                      >
                        <li>
                          <a href="#" className="foot-link title-anim">
                            Marketing
                          </a>
                        </li>
                        <li>
                          <a href="#" className="foot-link title-anim">
                            Product Design
                          </a>
                        </li>
                        <li>
                          <a href="#" className="foot-link title-anim">
                            Web Design
                          </a>
                        </li>
                        <li>
                          <a href="#" className="foot-link title-anim">
                            Development
                          </a>
                        </li>
                      </motion.ul>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <motion.h3
                      className="footer-9-subtitle title-anim"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1.2, ease: "linear" }}
                      viewport={{ once: true }}
                    >
                      <CustomGsapTextSplitLine children="Sign up to get the latest on sales, new releases, store events and more." />
                    </motion.h3>
                    <motion.form
                      className="footer-9-form"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: "linear" }}
                      viewport={{ once: true }}
                    >
                      <input
                        type="email"
                        placeholder="Enter your email address"
                      />
                      <button>
                        Subscribe <i className="fa-light fa-arrow-up-right"></i>
                      </button>
                    </motion.form>
                    <motion.div
                      className="social fade_bottom"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: "linear" }}
                      viewport={{ once: true }}
                    >
                      <a href="#">Facebook</a>
                      <a href="#">Twitter</a>
                      <a href="#">Instagram</a>
                      <a href="#">Linkedin</a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center row-gap-4 row-gap-sm-0">
              <div className="col-lg-6 col-sm-4">
                <motion.div
                  className="footer-9-logo"
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  viewport={{ once: true }}
                >
                  <img src="img/logo-8.png" alt="Logo" />
                  <p>© {new Date().getFullYear()} All Rights Reserved</p>
                </motion.div>
              </div>
              <div className="col-lg-6 col-sm-8">
                <motion.div
                  className="footer-9-link d-flex justify-content-sm-end justify-content-center"
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "linear" }}
                  viewport={{ once: true }}
                >
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Sitemap</a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
