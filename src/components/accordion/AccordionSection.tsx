'use client'
import { accordionData } from "@/data/Data";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { motion } from "framer-motion";
import CustomGsapTextSplit from "../utils/CustomGsapTextSplit";
const AccordionSection: React.FC = () => {
  return (
    <Accordion className="faq-10-accordion" defaultActiveKey="1">
      {accordionData.map((item) => (
        <motion.div 
        key={item.id}
        initial={{
            x: -100,
            opacity: 0
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{once: true}}
        transition={{
            duration: 1.2 + 0.2 * item.id
        }}
        >
            <Accordion.Item eventKey={item.id.toString()}>
                <Accordion.Header>
                    <CustomGsapTextSplit>
                    {item.question}
                    </CustomGsapTextSplit>
                </Accordion.Header>
                <Accordion.Body>
                    {item.answer}
                </Accordion.Body>
            </Accordion.Item>
        </motion.div>
        
      ))}
    </Accordion>
  );
};

export default AccordionSection;
