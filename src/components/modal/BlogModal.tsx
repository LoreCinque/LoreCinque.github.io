"use client";
import { toggleBlogModalClose } from "@/redux/features/blogModalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { Modal } from "react-bootstrap";
import BlogModalText from "./BlogModalText";
import BlogCommentSection from "./BlogCommentSection";

const BlogModal = () => {
  const dispatch = useAppDispatch();
  const isBlogModalOpen = useAppSelector(
    (state) => state.blogModal.isBlogModalOpen
  );
  const currentBlogItem = useAppSelector(
    (state) => state.blogModal.currentBlogItem
  );
  const closeBlogModal = () => {
    dispatch(toggleBlogModalClose());
  };
  return (
    <Modal
      className="blog-modal"
      id="blogModal"
      onHide={closeBlogModal}
      show={isBlogModalOpen}
      contentClassName="blog-modal-content"
      size="xl"
      centered
    >
      <Modal.Header className="blog-modal-header">
        <h3 className="blog-modal-header">Blog Details</h3>
        <button className="blog-modal-close-btn" onClick={closeBlogModal}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body className="blog-modal-body">
        <div className="blog-body-container">
          <div className="blog-image-container">
            <img src={currentBlogItem?.img} alt="image" />
          </div>
          {currentBlogItem && (
            <BlogModalText currentBlogItem={currentBlogItem} />
          )}
          <BlogCommentSection />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BlogModal;
