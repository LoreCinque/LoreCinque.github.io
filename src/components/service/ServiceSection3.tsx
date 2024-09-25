"use client";
import React from "react";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";

const ServiceSection3 = () => {
  return (
    <section id="Service">
      <div className="service-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="section-heading-11 text-center">
                <h2 className="title-anim">
                  <CustomGsapTextSplit>
                    Provide A Wide Range Of Services
                  </CustomGsapTextSplit>
                </h2>
              </div>
            </div>
          </div>
          <motion.div
            className="row g-4 justify-content-center justify-content-sm-start d-flex"
            initial={{
              y: 80,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="col-lg-3 col-sm-6 col-8">
              <div className="single-service-11">
                <div className="part-img">
                  <img src="img/service_11-1.png" alt="Image" />
                </div>
                <div className="part-icon fade_bottom">
                  <svg
                    id="f"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 80 80"
                  >
                    <path
                      id="Path_4692"
                      data-name="Path 4692"
                      d="M42.494,101.563H33.3a2.294,2.294,0,0,0-2.3,2.292v16.35a2.294,2.294,0,0,0,2.3,2.292h9.2a2.294,2.294,0,0,0,2.3-2.292v-16.35A2.294,2.294,0,0,0,42.494,101.563Zm18.39-18.337h-9.2a2.294,2.294,0,0,0-2.3,2.292v34.687a2.294,2.294,0,0,0,2.3,2.292h9.2a2.294,2.294,0,0,0,2.3-2.292V85.518A2.294,2.294,0,0,0,60.884,83.226Zm18.39,9.168h-9.2a2.294,2.294,0,0,0-2.3,2.292v25.519a2.294,2.294,0,0,0,2.3,2.292h9.2a2.294,2.294,0,0,0,2.3-2.292V94.686A2.294,2.294,0,0,0,79.274,92.394Zm18.39-18.337h-9.2a2.294,2.294,0,0,0-2.3,2.292v43.855a2.294,2.294,0,0,0,2.3,2.292h9.2a2.294,2.294,0,0,0,2.3-2.292V76.35A2.294,2.294,0,0,0,97.664,74.058ZM75.952,79.027a2.3,2.3,0,0,0,3.188-.636l13.29-19.877A2.3,2.3,0,0,0,88.6,55.972L75.314,75.848A2.287,2.287,0,0,0,75.952,79.027ZM58.585,71.766l11.036,8.251a2.294,2.294,0,1,0,2.757-3.666L61.342,68.1a2.294,2.294,0,1,0-2.757,3.666ZM39.331,88.314a2.308,2.308,0,0,0,3.233-.358L55.211,72.193a2.3,2.3,0,0,0-3.592-2.865L38.972,85.091A2.291,2.291,0,0,0,39.331,88.314Z"
                      transform="translate(-25.481 -45.167)"
                    />
                    <path
                      id="Path_4693"
                      data-name="Path 4693"
                      d="M77.656,75.313H2.344a2.344,2.344,0,0,0,0,4.688H77.656a2.344,2.344,0,0,0,0-4.687Zm-9.531-61.25a7.031,7.031,0,1,0-7.031-7.031A7.039,7.039,0,0,0,68.125,14.062ZM49.375,42.187a7.031,7.031,0,1,0-7.031-7.031A7.039,7.039,0,0,0,49.375,42.187ZM30.625,28.125a7.031,7.031,0,1,0-7.031-7.031A7.039,7.039,0,0,0,30.625,28.125ZM11.875,51.562a7.031,7.031,0,1,0-7.031-7.031A7.039,7.039,0,0,0,11.875,51.562Z"
                    />
                  </svg>
                </div>
                <div className="part-txt title-anim">
                  <h3 className="service-11-title">
                    <a href="#">Financial Planning</a>
                  </h3>
                  <p className="service-11-dscr">
                    An accountant can assist with the preparation of personal.
                  </p>
                  <ul className="service-11-list">
                    <li>
                      <i className="fa-regular fa-plus"></i> Minimizing Tax
                      Liabilities
                    </li>
                    <li>
                      <i className="fa-regular fa-plus"></i> Identifying
                      Deductions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-8">
              <div className="single-service-11">
                <div className="part-img">
                  <img src="img/service_11-2.png" alt="Image" />
                </div>
                <div className="part-icon fade_bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 76.181 80"
                  >
                    <g id="a_" data-name="a " transform="translate(-5.337 -4)">
                      <path
                        id="Path_4694"
                        data-name="Path 4694"
                        d="M58.663,62.6c.623,15.226,22.289,15.11,22.856,0a11.429,11.429,0,1,0-22.857,0Zm10-7.114a1.429,1.429,0,1,1,2.857-.014,4.547,4.547,0,0,1,2.871,3.243,1.432,1.432,0,1,1-2.8.6,1.54,1.54,0,1,0-1.5,1.871,4.4,4.4,0,0,1,1.429,8.557,1.429,1.429,0,0,1-2.857.014c-1.719-.464-4.294-3.653-1.829-4.714a1.42,1.42,0,0,1,1.771.971,1.544,1.544,0,1,0,1.486-1.971,4.406,4.406,0,0,1-1.429-8.557ZM41.834,42.971a9.711,9.711,0,0,1-12.1.016,8,8,0,0,1,4.043-4.714,4.914,4.914,0,0,0,4.014,0,7.953,7.953,0,0,1,4.043,4.7ZM35.791,31.587a2.134,2.134,0,1,1-2.02,1.5,2.129,2.129,0,0,1,2.02-1.5ZM27.663,40.63a9.65,9.65,0,1,1,17.786-5.186A9.517,9.517,0,0,1,43.92,40.63a10.809,10.809,0,0,0-3.857-4.371,4.779,4.779,0,0,0,.714-2.543,4.986,4.986,0,1,0-9.271,2.543A10.686,10.686,0,0,0,27.663,40.63ZM14.178,84H57.407a8.857,8.857,0,0,0,8.757-7.657,14.28,14.28,0,0,1,.086-27.486v-29.7a8.867,8.867,0,0,0-8.857-8.871l-5.6.014v4.714a2.963,2.963,0,0,1-2.957,2.957H22.75a2.987,2.987,0,0,1-2.714-1.757c-.414-.729-.257-5.929-.257-5.929h-5.6a8.864,8.864,0,0,0-8.841,8.871V75.129A8.864,8.864,0,0,0,14.18,84Zm6.9-21.414a1.424,1.424,0,0,1,1.429-1.429H33.221a1.429,1.429,0,1,1,0,2.857H22.507A1.433,1.433,0,0,1,21.078,62.586Zm24.043,8.957H26.45a1.429,1.429,0,0,1,0-2.857H45.121a1.429,1.429,0,0,1,0,2.857Zm-9.486-8.957A1.48,1.48,0,1,1,37.114,64a1.48,1.48,0,0,1-1.479-1.415Zm13.429,1.429H41.007a1.429,1.429,0,1,1,0-2.857h8.057a1.429,1.429,0,1,1,0,2.857ZM35.793,22.931A12.529,12.529,0,0,1,48.307,35.446c.07,10.966-13.45,16.676-21.229,8.984a12.554,12.554,0,0,1,8.714-21.5ZM19.963,53.614H51.606a1.429,1.429,0,1,1,0,2.857H19.963a1.429,1.429,0,1,1,0-2.857ZM48.828,15.006l-26.084.014V8.531h4.73a1.777,1.777,0,0,0,1.777-1.78A2.751,2.751,0,0,1,32,4H39.57a2.751,2.751,0,0,1,2.751,2.751A1.779,1.779,0,0,0,44.1,8.531h4.73Z"
                        transform="translate(0)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="part-txt title-anim">
                  <h3 className="service-11-title">
                    <a href="#">Tax Preparation</a>
                  </h3>
                  <p className="service-11-dscr">
                    An accountant can assist with the preparation of personal.
                  </p>
                  <ul className="service-11-list">
                    <li>
                      <i className="fa-regular fa-plus"></i> Minimizing Tax
                      Liabilities
                    </li>
                    <li>
                      <i className="fa-regular fa-plus"></i> Identifying
                      Deductions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-8">
              <div className="single-service-11">
                <div className="part-img">
                  <img src="img/service_11-3.png" alt="Image" />
                </div>
                <div className="part-icon fade_bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 79.747 80"
                  >
                    <g
                      id="bookkeeping_"
                      data-name="bookkeeping "
                      transform="translate(-1.5 -1.4)"
                    >
                      <path
                        id="Path_4695"
                        data-name="Path 4695"
                        d="M69.31,27.6H37.665A3.134,3.134,0,0,0,34.5,30.765v40.38a3.215,3.215,0,0,0,3.165,3.165H69.31a3.134,3.134,0,0,0,3.165-3.165V30.765A3.134,3.134,0,0,0,69.31,27.6ZM49.184,66.081a1.253,1.253,0,0,1-1.772,1.772l-1.139-1.139-1.139,1.139a1.253,1.253,0,0,1-1.772-1.772L44.5,64.942,43.361,63.8a1.253,1.253,0,0,1,1.772-1.772l1.139,1.139,1.139-1.139A1.253,1.253,0,0,1,49.184,63.8l-1.139,1.139Zm-.127-12.152H47.538v1.519a1.266,1.266,0,1,1-2.532,0V53.929H43.487a1.266,1.266,0,1,1,0-2.532h1.519V49.878a1.266,1.266,0,0,1,2.532,0V51.4h1.519a1.266,1.266,0,1,1,0,2.532Zm14.3,14.43h-5.7a1.266,1.266,0,0,1,0-2.532h5.7a1.266,1.266,0,0,1,0,2.532Zm0-5.063h-5.7a1.266,1.266,0,0,1,0-2.532h5.7a1.266,1.266,0,1,1,0,2.532Zm0-9.367h-5.7a1.266,1.266,0,0,1,0-2.532h5.7a1.266,1.266,0,0,1,0,2.532ZM66.146,43.8a1.2,1.2,0,0,1-1.266,1.266H41.842A1.2,1.2,0,0,1,40.576,43.8V34.815a1.2,1.2,0,0,1,1.266-1.266H64.88a1.2,1.2,0,0,1,1.266,1.266Z"
                        transform="translate(8.772 6.965)"
                      />
                      <path
                        id="Path_4696"
                        data-name="Path 4696"
                        d="M45.22,32.033H65.853V4.691A3.351,3.351,0,0,0,62.562,1.4H8.891A3.441,3.441,0,0,0,5.6,4.691v5.7h8.734a5.443,5.443,0,0,1,0,10.886H5.6v6.2h8.734a5.484,5.484,0,0,1,5.443,5.443,5.4,5.4,0,0,1-5.443,5.443H5.6v6.076h8.734a5.443,5.443,0,0,1,0,10.886H5.6v5.949h8.734a5.443,5.443,0,0,1,0,10.886H5.6v5.949A3.351,3.351,0,0,0,8.891,81.4H40.41A5.539,5.539,0,0,1,39.4,78.235V37.729a5.864,5.864,0,0,1,5.823-5.7Z"
                        transform="translate(1.09 0)"
                      />
                      <path
                        id="Path_4697"
                        data-name="Path 4697"
                        d="M4.411,16.423H15.424a2.911,2.911,0,1,0,0-5.823H4.411c-3.8,0-3.924,5.823,0,5.823Zm0,16.962H15.424a2.911,2.911,0,1,0,0-5.823H4.411a2.911,2.911,0,1,0,0,5.823Zm0,16.962H15.424a2.944,2.944,0,0,0,2.911-2.911,2.865,2.865,0,0,0-2.911-2.911H4.411A2.944,2.944,0,0,0,1.5,47.435,2.865,2.865,0,0,0,4.411,50.347ZM18.462,64.4a2.865,2.865,0,0,0-2.911-2.911H4.411a2.911,2.911,0,1,0,0,5.823H15.424A2.973,2.973,0,0,0,18.462,64.4Z"
                        transform="translate(0 2.446)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="part-txt title-anim">
                  <h3 className="service-11-title">
                    <a href="#">Bookkeeping</a>
                  </h3>
                  <p className="service-11-dscr">
                    An accountant can assist with the preparation of personal.
                  </p>
                  <ul className="service-11-list">
                    <li>
                      <i className="fa-regular fa-plus"></i> Minimizing Tax
                      Liabilities
                    </li>
                    <li>
                      <i className="fa-regular fa-plus"></i> Identifying
                      Deductions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-8">
              <div className="single-service-11">
                <div className="part-img">
                  <img src="img/service_11-4.png" alt="Image" />
                </div>
                <div className="part-icon fade_bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 79.375 80"
                  >
                    <g
                      id="consulting_"
                      data-name="consulting "
                      transform="translate(-4.217 -4)"
                    >
                      <path
                        id="Path_4698"
                        data-name="Path 4698"
                        d="M74.487,4H45.244A5.341,5.341,0,0,0,39.9,9.329V25.557a5.347,5.347,0,0,0,5.486,5.329,1.083,1.083,0,0,1,1.071,1.086v8.6a1.446,1.446,0,0,0,2.486.971L57.359,32.4A4.717,4.717,0,0,1,60.8,30.886H74.487a5.329,5.329,0,0,0,5.329-5.329V9.329A5.329,5.329,0,0,0,74.487,4ZM46.016,21.771a1.424,1.424,0,0,1,1.429-1.429H72.287a1.429,1.429,0,1,1,0,2.857H47.444a1.414,1.414,0,0,1-1.429-1.429Zm26.271-7.229H47.444a1.429,1.429,0,1,1,0-2.857H72.287a1.429,1.429,0,1,1,0,2.857ZM28.2,61.343A15.2,15.2,0,0,0,43.373,46.171c-.834-20.129-29.521-20.121-30.343,0A15.19,15.19,0,0,0,28.2,61.343Zm31.943-5.529A14.093,14.093,0,0,0,46.059,69.886c.767,18.68,27.389,18.69,28.157,0A14.09,14.09,0,0,0,60.144,55.814ZM60.13,68.457a4.25,4.25,0,0,1,1.443,8.229v1.357a1.429,1.429,0,1,1-2.857,0V76.7c-2.006-.383-4.471-4.969-1.386-5.429A1.433,1.433,0,0,1,58.759,72.7a1.386,1.386,0,1,0,1.386-1.386,4.247,4.247,0,0,1-1.429-8.229V61.743a1.429,1.429,0,1,1,2.857,0V63.1a4.247,4.247,0,0,1,2.8,3.986,1.429,1.429,0,0,1-2.857,0,1.379,1.379,0,1,0-1.386,1.371Z"
                        transform="translate(3.777 0)"
                      />
                      <path
                        id="Path_4699"
                        data-name="Path 4699"
                        d="M46.978,53.681A16.713,16.713,0,0,1,49.635,44.6,26.121,26.121,0,0,0,45.55,41.81a17.648,17.648,0,0,1-2.157,2.1,18,18,0,0,1-25-2.1A27.823,27.823,0,0,0,4.278,61.824,5.179,5.179,0,0,0,9.335,67.8H54.578a16.879,16.879,0,0,1-7.6-14.114Z"
                        transform="translate(0 16.204)"
                      />
                    </g>
                  </svg>
                </div>
                <div className="part-txt title-anim">
                  <h3 className="service-11-title">
                    <a href="#">Consulting</a>
                  </h3>
                  <p className="service-11-dscr">
                    An accountant can assist with the preparation of personal.
                  </p>
                  <ul className="service-11-list">
                    <li>
                      <i className="fa-regular fa-plus"></i> Minimizing Tax
                      Liabilities
                    </li>
                    <li>
                      <i className="fa-regular fa-plus"></i> Identifying
                      Deductions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection3;
