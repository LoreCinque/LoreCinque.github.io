'use client'
import { toggleIgPostModalClose } from '@/redux/features/igPostSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React from 'react';
import { Modal } from 'react-bootstrap';

const IgPostModal = () => {
  const dispatch = useAppDispatch()
  const isIgPostModalOpen = useAppSelector(state => state.igPostModal.isIgPostModalOpen);
  const closeIgPostModal = () => {
    dispatch(toggleIgPostModalClose())    
  }
  return (
      <Modal 
      show={isIgPostModalOpen} 
      onHide={closeIgPostModal} 
      centered size="xl"
      className='ig-post-modal'
      >
        <Modal.Body>
          <iframe title="Instagram Post" className="ig-post-iframe" src="https://www.instagram.com/p/Ck49HIXOqUC/embed/" />
        </Modal.Body>
      </Modal>
  );
}

export default IgPostModal;
