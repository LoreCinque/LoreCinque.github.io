'use client'
import React, { useEffect, useState, useRef } from 'react';
import { portfolioData } from '@/data/Data';
import { motion } from 'framer-motion';
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine';
type Props = {};

const PortfolioComponent: React.FC<Props> = () => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const [activeProject, setActiveProject] = useState<number | null>(1); 
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const imageListRef = useRef<HTMLUListElement>(null);

  const handleProjectHover = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const projectId = parseInt(event.currentTarget.id.replace('project-', ''), 10); // Parse the integer from the ID
    const parentElement = event.currentTarget.parentElement;
    const index = parentElement ? Array.from(parentElement.children).indexOf(event.currentTarget) : null;

    setHoveredItemIndex(index);
    setActiveProject(projectId);    
  };

  const calculateImageHeight = () => {
    const imageHeight = imageListRef.current?.querySelector('img')?.clientHeight || null;
    setImageHeight(imageHeight);
  };

  // Run the image height calculation when the component mounts and whenever the hovered item changes
  useEffect(() => {
    calculateImageHeight();
  }, [hoveredItemIndex]);

  return (
    <div className="row portfolio-8-row align-items-center">
      <div className="col-sm-6">
        <ul className="portfolio-project-list">
          {portfolioData.map((item) => (
            <motion.li 
            className="title-anim" 
            key={item.id}
            initial={{
                x: -40,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1 + 0.2 * item.id
            }}
            viewport={{once: true}}
            >
                
                    <a
                href="#"
                id={`project-${item.id}`}
                className={activeProject === item.id ? 'hovered' : ''} // Change to compare with item.id
                onMouseEnter={handleProjectHover}
              >
                <CustomGsapTextSplitLine>
                <span>
                  {item.title} <i className="fa-regular fa-arrow-up-right"></i>
                </span>
                </CustomGsapTextSplitLine>
              
              </a>
                
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="col-sm-6">
        <ul className="portfolio-image-list fade_bottom" ref={imageListRef}>
          <li>
            <div className="for-image-height" style={{ height: `${imageHeight}px` }}></div>
            <motion.div 
            className="item-count"
            initial={{
                y: 40,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            viewport={{once: true}}
            transition={{duration: 1.2}}
            >
              <h3>
                {activeProject? activeProject : 0 } / {portfolioData.length}
              </h3>
            </motion.div>
          </li>
          {portfolioData.map((item) => (
            <li key={item.id}>
              <div className={`part-img ${activeProject === item.id ? 'active' : ''}`}>
                <motion.img 
                src={item.img} 
                className="image-animation-img" 
                alt="Image"
                initial={{scale: 1.2}}
                whileInView={{scale: 1}}
                transition={{duration: 1.2}}
                viewport={{once: true}}
                 />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioComponent;
