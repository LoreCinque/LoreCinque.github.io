'use client'
import { toggleVideoModalClose } from '@/redux/features/videoModalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Modal } from 'react-bootstrap'
type VideoProp = {
    videoUrl: string,
}
const VideoModal:React.FC<VideoProp> = ({videoUrl}) => {
    const dispatch = useAppDispatch()
    const isVideoModalOpen = useAppSelector(state => state.videoModal.isVideoModalOpen);
    const closeVideoModal = () => {
      dispatch(toggleVideoModalClose());
    };
    const pathname = usePathname()
  return (
    <Modal 
    id="video-overlay" 
    show={isVideoModalOpen}
    onHide={closeVideoModal}
    size='lg' 
    className={pathname === '/' && 'home-1-video-modal' || pathname === '/home-2' && 'home-2-video-modal'|| pathname === '/home-3' && 'home-3-video-modal'|| pathname === '/home-4' && 'home-4-video-modal'|| 'video-modal'}
    centered>
        <Modal.Header className="video-overlay-close">
          <button className='video-modal-close-btn' onClick={closeVideoModal}>x</button>
        </Modal.Header>
        <Modal.Body>
          <iframe
            className="video-modal-iframe"
            src={videoUrl}
            allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
    </Modal>
  )
}

export default VideoModal