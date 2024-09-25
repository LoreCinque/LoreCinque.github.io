"use client";
import React from "react";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
import CustomGsapTextSplitLine from "../utils/CustomGsapTextSplitLine";
import { motion } from "framer-motion";
import SubscribeForm from "../form/SubscribeForm";

type Props = {
  style: string;
  btnStyle: string;
};

const NewsletterSection = ({ style, btnStyle }: Props) => {
  return (
    <section>
      <div className={`newsletter ${style}`}>
        <div className="container">
          <div className="newsletter_wrap">
            <div className="row align-items-center justify-content-between g-4">
              <div className="col-xxl-5 col-lg-6">
                <div className="newsletter_content">
                  <h2>
                    <CustomGsapTextSplit children="Subscribe For Newsletter" />
                  </h2>
                  <CustomGsapTextSplitLine>
                    Subscribe to our newsletter and we will bring you the latest
                    news.
                  </CustomGsapTextSplitLine>
                </div>
              </div>
              <motion.div
                className="col-lg-6"
                initial={{
                  y: 50,
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
                <SubscribeForm
                  formStyle="newsletter_form"
                  btnStyle={btnStyle}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
