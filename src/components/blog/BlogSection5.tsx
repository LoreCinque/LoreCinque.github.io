'use client'
import { blogData5 } from '@/data/Data'
import React from 'react'
import CustomGsapTextSplit from '../utils/CustomGsapTextSplit'
import CustomGsapTextSplitLine from '../utils/CustomGsapTextSplitLine'
import { useAppDispatch } from '@/redux/hooks'
import { toggleBlogModalOpen } from '@/redux/features/blogModalSlice'
type Props = {
    style: string;
    headingStyle: string;
    showShape: boolean;
}
const BlogSection5 = ({style, headingStyle, showShape} : Props) => {
    const dispatch = useAppDispatch()
  return (
    <section id="Blog">
        <div className={`newsfeed-sec ${style}`}>
            {showShape && <div className="animated-shape shape-white">
                <div className="layer-1"></div>
                <div className="layer-2"></div>
                <div className="layer-3"></div>
                <div className="layer-4"></div>
                <div className="layer-5"></div>
            </div>}
            <div className="container">
                <div className="row">
                    <div className={`section-heading ${headingStyle} text-center`}>
                        <h5><CustomGsapTextSplit children="Latest Blog" /></h5>
                        <h2><CustomGsapTextSplit children="Update From NewsFeed" /></h2>
                    </div>
                </div>
                <div className="row g-lg-0 g-4">
                    {blogData5.slice(0,2).map((item) =>{ 
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
  )
}

export default BlogSection5