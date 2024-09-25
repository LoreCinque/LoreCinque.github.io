import React from "react";
interface Props {
  currentBlogItem: {
    title: string;
    date?: string;
    author: string;
    description: string;
  };
}
const BlogModalText = ({ currentBlogItem }: Props) => {
  return (
    <div className="blog-text-container">
      <div className="text-top-section">
        <h4 className="blog-title-text">{currentBlogItem?.title}</h4>
        <div className="rightside-text">
          <p>
            <i className="fa-light fa-user"></i> Author:{" "}
            {currentBlogItem?.author}
          </p>
          <p>
            <i className="fa-light fa-clock"></i>{" "}
            {currentBlogItem?.date ? currentBlogItem?.date : "23 November 2023"}
          </p>
        </div>
      </div>
      <div
        className="text-bottom-section"
        dangerouslySetInnerHTML={{ __html: currentBlogItem.description }}
      ></div>
    </div>
  );
};

export default BlogModalText;
