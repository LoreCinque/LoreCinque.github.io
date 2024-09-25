'use client'
import React from 'react'
import AccordionSection from '../accordion/AccordionSection'
import PricingSection from './PricingSection'
import { motion } from 'framer-motion'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'

const PackageSection = () => {
  return (
    <section>
    <div className="pricing-10">
        <div className="container">
            <div className="row align-items-center row-gap-lg-0 row-gap-5">
                <div className="col-lg-6">
                    <div className="faq-10">
                        <motion.div 
                        className="section-heading-8 section-heading-10"
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1
                        }}
                        viewport={{once: true}}
                        transition={{
                            duration: 1.5
                        }}
                        >
                            <h2>
                                <CustomGsapTextSplit children="explore your best option"/>
                            </h2>
                        </motion.div>
                        <AccordionSection/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <PricingSection/>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default PackageSection