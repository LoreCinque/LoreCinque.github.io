import React from "react";
import CommentForm from "../form/CommentForm";

const BlogCommentSection = () => {
  return (
    <div className="blog-comment-section">
      <h3 className="comment-section-title">Leave a Reply</h3>
      <CommentForm />
    </div>
  );
};

export default BlogCommentSection;
