'use client'
import { blogData5 } from '@/data/Data';
import { toggleBlogModalOpen } from '@/redux/features/blogModalSlice';
import { useAppDispatch } from '@/redux/hooks';
import React from 'react'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit';
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine';
type Props = {
    sectionOpen : boolean;
    handleClose: () => void;
}

const BlogPopupSection = ({sectionOpen,handleClose} : Props) => {
    const dispatch = useAppDispatch()

    return (
    <div className={`tc-popup-modal ${sectionOpen && 'active'}`} id="popup-blog" data-bgcolor="#1a1f22">
            <button className="tc-popup-close-btn" onClick={handleClose}><i className="fa-solid fa-times"></i></button>
            <section id="Blog" className="pt-120">
                <div className="newsfeed-sec">
                    <div className="animated-shape shape-white">
                        <div className="layer-1"></div>
                        <div className="layer-2"></div>
                        <div className="layer-3"></div>
                        <div className="layer-4"></div>
                        <div className="layer-5"></div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="section-heading text-center">
                                <h5><CustomGsapTextSplit children="Latest Blog" /></h5>
                                <h2><CustomGsapTextSplit children="Update From NewsFeed" /></h2>
                            </div>
                        </div>
                        <div className="row g-4">
                        {blogData5.map((item) =>{ 
                        const handleBlogOpen = () => {
                            dispatch(toggleBlogModalOpen(item))
                        }
                        return (
                     <div className="col-lg-6" key={item.id}>
                        <div className="blog-card">
                            <div className="post-date">
                                <p>{item.date}</p>
                            </div>
                            <div className="blog-text">
                                <p className="post-admin"><i className="fa-solid fa-user-pen"></i> {item.author}</p>
                                <a role='button' onClick={handleBlogOpen}>
                                    <h3 className="blog-title">
                                        <CustomGsapTextSplit children={item.title} />
                                    </h3>  
                                </a>
                                
                                <CustomGsapTextSplitLine className="blog-desp">Lorem ipsum dolor sit amet consec tetur adipisicing elit. Ipsa, odit! Voluptatum ducimus, nihil delectus hic nobis est omnis debi.</CustomGsapTextSplitLine>
                                <div className="direction">
                                    <a role='button' onClick={handleBlogOpen}><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="blog-image">
                                <img src={item.img} alt="Image"/>   
                            </div>
                        </div>
                    </div>   
                    )})}
                    
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default BlogPopupSection