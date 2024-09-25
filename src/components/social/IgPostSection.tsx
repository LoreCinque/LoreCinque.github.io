'use client'
import { igPosts } from '@/data/Data';
import React from 'react';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/redux/hooks';
import { toggleIgPostModalOpen } from '@/redux/features/igPostSlice';
const IgPostSection = () => {
    const dispatch = useAppDispatch();

    const openIgPostModal = () => {
        dispatch(toggleIgPostModalOpen())        
    }
  return (
    <div className="ig-post">
      {igPosts.map((post, index) => (
        <motion.div 
        className="ig-col" 
        key={index}
        initial={{
            y: -60,
            opacity: 0
        }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        viewport={{once: true}}
        transition={{duration: 1.2 + 0.3 * index}}
        >
          <a role="button" onClick={openIgPostModal}>
            <img src={post} alt={`image ${index + 1}`} />
            <span className="part-txt"><i className="fa-brands fa-instagram"></i></span>
          </a>
        </motion.div>
      ))}
    </div>
  );
};

export default IgPostSection;
