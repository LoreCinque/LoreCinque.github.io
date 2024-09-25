"use client";
import { toggleContactModalClose } from "@/redux/features/contactModalSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "../form/ContactForm";

const ContactFormModal = () => {
  const dispatch = useAppDispatch();
  const isContactModalOpen = useAppSelector(
    (state) => state.contactModal.isContactModalOpen
  );
  const closeContactModal = () => {
    dispatch(toggleContactModalClose());
  };

  return (
    <Modal
      className={`contact-modal modal fade ${isContactModalOpen ? "show" : ""}`}
      id="contactModal"
      onHide={closeContactModal}
      show={isContactModalOpen}
      contentClassName="modal-content-9"
      centered
    >
      <Modal.Header>
        <h3 className="modal-title" id="contactModalLabel">
          Contact With Me
        </h3>
        <button onClick={closeContactModal}>
          <i className="fa-light fa-times"></i>
        </button>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );
};

export default ContactFormModal;
