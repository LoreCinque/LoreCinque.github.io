'use client'
import { toggleLightboxClose } from '@/redux/features/lightboxSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect, useRef } from 'react'

const Lightbox = () => {
    const dispatch = useAppDispatch()
    const imgRef = useRef<HTMLDivElement | null>(null);
    const isLightboxOpen = useAppSelector(state => state.lightbox.isLightboxOpen)
    const currentLightboxImg = useAppSelector((state) => state.lightbox.currentLightboxImg)
    const closeLightbox = () => {
        dispatch(toggleLightboxClose())
    }
    const handleOutsideClick = (e: MouseEvent) => {
      if (imgRef.current && !imgRef.current.contains(e.target as Node)) {
        // Click occurred outside the imgRef element
        closeLightbox();
      }
    };
  
    useEffect(() => {
      if (isLightboxOpen) {
        // Add an event listener to the entire document to handle outside clicks
        document.addEventListener('mousedown', handleOutsideClick);
      } else {
        // Remove the event listener when the lightbox is closed
        document.removeEventListener('mousedown', handleOutsideClick);
      }
  
      return () => {
        // Clean up the event listener on component unmount
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, [isLightboxOpen, closeLightbox]);
  return (
    <div
      className={`lightbox-container ${isLightboxOpen ? 'active' : ''}`}
      role='button'
    >
      <div className="lightbox-img" ref={imgRef}>
        {currentLightboxImg && <img
          className="quick-view-image"
          src={`/${currentLightboxImg}`}
          alt="image"
        />}
      </div>
    </div>
  )
}

export default Lightbox