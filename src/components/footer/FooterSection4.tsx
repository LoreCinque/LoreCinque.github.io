'use client'
import React from 'react'
import { motion } from 'framer-motion'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
const FooterSection4 = () => {
  return (
    <section>
        <footer className="footer-11">
            <div className="container">
                <div className="main-footer">
                    <div className="row justify-content-between g-lg-4 gy-5">
                        <motion.div 
                        className="col-lg-3 col-md-7 col-sm-6"
                        initial={{
                            y: 60,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}

                        transition={{
                            duration: 1.2
                        }}
                        >
                            <div className="footer-menu">
                                <div className="logo title-anim">
                                    <img src="img/logo-11.png" alt="LOGO"/>
                                </div>
                                <CustomGsapTextSplitLine className="title-anim footer-desc">
                                As an accountant, I believe that attention to detail, and trust are essential for long-term relationships with my clients.
                                </CustomGsapTextSplitLine>
                                <ul className="social-network social-circle fade_bottom">
                                    <li><a href="#" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#" title="X"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#" title="Youtube"><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#" title="Skype"><i className="fa-brands fa-skype"></i></a></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div 
                        className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                        initial={{
                            y: 60,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}

                        transition={{
                            duration: 1.4
                        }}
                        >
                            <div className="footer-menu">
                                <h3 className="footer-heading title-anim">
                                    <CustomGsapTextSplit>
                                    Quick Link
                                    </CustomGsapTextSplit>
                                </h3>
                                <ul className="footer-menu-list">
                                    <li className="title-anim"><a href="#" className="foot-link">About Me</a></li>
                                    <li className="title-anim"><a href="#" className="foot-link">Donate Money</a></li>
                                    <li className="title-anim"><a href="#" className="foot-link">Election Issues</a></li>
                                    <li className="title-anim"><a href="#" className="foot-link">Latest News</a></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div 
                        className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                        initial={{
                            y: 60,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}

                        transition={{
                            duration: 1.6
                        }}
                        >
                            <div className="footer-menu">
                                <h3 className="footer-heading title-anim">
                                    <CustomGsapTextSplit>
                                    Quick Link
                                    </CustomGsapTextSplit>
                                </h3>
                                <ul className="footer-menu-list">
                                    <li className="title-anim"><a href="#" className="foot-link">About Me</a></li>
                                    <li className="title-anim"><a href="#" className="foot-link">Donate Money</a></li>
                                    <li className="title-anim"><a href="#" className="foot-link">Election Issues</a></li>
                                    <li className="title-anim"><a href="#" className="foot-link">Latest News</a></li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div className="col-lg-3 col-md-4 col-sm-6"
                         initial={{
                            y: 60,
                            opacity: 0
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}

                        transition={{
                            duration: 1.8
                        }}
                        >
                            <div className="footer-menu">
                                <h3 className="footer-heading title-anim">
                                    <CustomGsapTextSplit>
                                    Contact Me
                                    </CustomGsapTextSplit>
                                </h3>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <span className="part-icon">
                                                <i className="fa-light fa-map-location-dot"></i>
                                            </span>
                                            <span className="part-txt title-anim">123 Main Street Apt 4B Anytown NY 12345 United States</span>
                                        </li>
                                        <li>
                                            <span className="part-icon">
                                                <i className="fa-light fa-phone-plus"></i>
                                            </span>
                                            <span className="part-txt title-anim">
                                                <a href="tel:5551234567">(555) 123-4567</a>
                                                <a href="tel:5552441457">(555) 244-1457</a>
                                            </span>
                                        </li>
                                        <li>
                                            <span className="part-icon">
                                                <i className="fa-light fa-envelope-open"></i>
                                            </span>
                                            <span className="part-txt title-anim">
                                                <a href="mailto:johndoe@example.com">johndoe@example.com</a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container">
                    <div className="row">
                        <motion.div 
                        className="col-12"
                        initial={{
                            x: -60,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1
                        }}
                        viewport={{ once: true }}

                        transition={{
                            duration: 1.2
                        }}
                        >
                            <div className="copyright text-center">
                                <p className="copy">Copyright <strong>Porichiti</strong> {new Date().getFullYear()} All Right Reserved</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default FooterSection4