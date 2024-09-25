"use client";
import { toggleBlogLandscapeModalClose } from "@/redux/features/blogLandscapeModalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { Modal } from "react-bootstrap";
// import BlogCommentSection from "./BlogCommentSection";
import BlogModalText from "./BlogModalText";

const BlogModalLandscape = () => {
  const dispatch = useAppDispatch();
  const isBlogLandscapeModalOpen = useAppSelector(
    (state) => state.blogLandscapeModal.isBlogLandscapeModalOpen
  );
  const currentBlogLandscapeItem = useAppSelector(
    (state) => state.blogLandscapeModal.currentBlogLandscapeItem
  );
  const closeBlogLandscapeModal = () => {
    dispatch(toggleBlogLandscapeModalClose());
  };
  return (
    <Modal
      className="blog-modal-landscape"
      id="blogModal"
      onHide={closeBlogLandscapeModal}
      show={isBlogLandscapeModalOpen}
      contentClassName="blog-modal-landscape"
      size="xl"
      centered
    >
      <Modal.Header className="blog-modal-header">
        <h3 className="blog-modal-header">Blog Details</h3>
        <button
          className="blog-modal-close-btn"
          onClick={closeBlogLandscapeModal}
        >
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body className="blog-modal-body">
        <div className="blog-landscape-body-container">
          {currentBlogLandscapeItem?.img && (
            <div className="blog-landscape-image-container">
              <img src={currentBlogLandscapeItem?.img} alt="image" />
            </div>
          )}
          {currentBlogLandscapeItem && (
            <BlogModalText currentBlogItem={currentBlogLandscapeItem} />
          )}
          {/* <BlogCommentSection /> */}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BlogModalLandscape;
