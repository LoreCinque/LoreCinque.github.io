"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  logo: string;
  style: string;
  shapeStyle?: string;
};

const FooterSection5 = ({ style, logo, shapeStyle }: Props) => {
  return (
    <section>
      <footer className={style}>
        <div className={`animated-shape shape-1 ${shapeStyle}`}>
          <div className="layer-1"></div>
          <div className="layer-2"></div>
          <div className="layer-3"></div>
          <div className="layer-4"></div>
          <div className="layer-5"></div>
        </div>
        <div className={`animated-shape shape-2 ${shapeStyle}`}>
          <div className="layer-1"></div>
          <div className="layer-2"></div>
          <div className="layer-3"></div>
          <div className="layer-4"></div>
          <div className="layer-5"></div>
        </div>
        {/* <div className="container">
          <div className="main-footer">
            <motion.div
              className="row justify-content-between g-lg-4 gy-5"
              initial={{
                y: 60,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
                ease: "easeIn",
              }}
              viewport={{ once: true }}
            >
              <div className="col-lg-3 col-md-8 col-sm-6">
                <div className="footer-menu">
                  <div className="logo">
                    <img src={logo} alt="LOGO" />
                  </div>
                  <p className="contact-number">(+12) 345-678-91012</p>
                  <p>75 Arlington St. Suite 500 Boston, MA 02116, USA.</p>
                  <ul className="social-network social-circle">
                    <li>
                      <a href="#" title="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Twitter">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Youtube">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Skype">
                        <i className="fa-brands fa-skype"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Useful Links</h3>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="#" className="foot-link">
                        Marketing
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Product Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Web Design
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Development
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Company</h3>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="#" className="foot-link">
                        IT Colsulting
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Latest Blogs
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Solution</h3>
                  <ul className="footer-menu-list">
                    <li>
                      <a href="#" className="foot-link">
                        Help
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Clients
                      </a>
                    </li>
                    <li>
                      <a href="#" className="foot-link">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-menu">
                  <h3 className="footer-heading">Get App</h3>
                  <div className="app-download">
                    <a href="#">
                      <img src="img/play-store.png" alt="Google Play" />
                    </a>
                    <a href="#">
                      <img src="img/app-store.png" alt="App Store" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.div
                  className="copyright text-center"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeIn",
                  }}
                  viewport={{ once: true }}
                >
                  <p className="copy">
                    Copyright <strong>Lorenzo</strong>{" "}
                    {new Date().getFullYear()} All Right Reserved
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection5;
