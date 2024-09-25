import React from "react";
import AnimatedFooterMenu from "../utils/AnimatedFooterMenu";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
const FooterSection2 = () => {
  return (
    <section>
      <footer className="footer-8">
        <div className="container">
          <div className="main-footer">
            <div className="row justify-content-between g-lg-4 gy-5">
              <div className="col-lg-3 col-md-8 col-sm-6 col-12">
                <AnimatedFooterMenu>
                  <div className="logo">
                    <img src="img/logo-8.png" alt="LOGO" />
                  </div>
                  <a href="tel:+12345-678-91012" className="contact-number">
                    (+12) 345-678-91012
                  </a>
                  <p>75 Arlington St. Suite 500 Boston, MA 02116, USA.</p>
                  <ul className="social-network social-circle">
                    <li>
                      <a href="#" title="Facebook">
                        Fb.
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Twitter">
                        Tw.
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Youtube">
                        Be.
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Skype">
                        Yt.
                      </a>
                    </li>
                  </ul>
                </AnimatedFooterMenu>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6 ">
                <AnimatedFooterMenu>
                  <CustomGsapTextSplit>
                    <h3 className="footer-heading">Userful Links</h3>
                  </CustomGsapTextSplit>
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
                </AnimatedFooterMenu>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <AnimatedFooterMenu>
                  <CustomGsapTextSplit>
                    <h3 className="footer-heading">Company</h3>
                  </CustomGsapTextSplit>
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
                </AnimatedFooterMenu>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <AnimatedFooterMenu>
                  <CustomGsapTextSplit>
                    <h3 className="footer-heading">Solution</h3>
                  </CustomGsapTextSplit>
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
                </AnimatedFooterMenu>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 col-6">
                <AnimatedFooterMenu>
                  <CustomGsapTextSplit>
                    <h3 className="footer-heading">Get App</h3>
                  </CustomGsapTextSplit>
                  <div className="app-download">
                    <a href="#">
                      <img src="img/play-store.png" alt="Google Play" />
                    </a>
                    <a href="#">
                      <img src="img/app-store.png" alt="App Store" />
                    </a>
                  </div>
                </AnimatedFooterMenu>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright text-center">
                  <p className="copy">
                    Copyright <strong>Porichiti</strong>{" "}
                    {new Date().getFullYear()} All Right Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection2;
