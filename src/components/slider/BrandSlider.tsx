'use client'
import { brandData3 } from '@/data/Data'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
const BrandSlider = () => {
  return (
    <motion.div
    initial={{
        y: -60,
        opacity: 0
    }}
    whileInView={{
        y: 0,
        opacity: 1
    }}
    viewport={{ once: true }}

    transition={{duration: 1.2}}
    >
      <Swiper 
    className="pc_branding_slider pc_branding_slider_11 owl-carousel fade_bottom"
    loop= {true}
    spaceBetween={30}
    breakpoints={{
        0: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 3
        },
        575: {
            slidesPerView: 3
        },
        767: {
            slidesPerView: 3
        },
        992: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }}
    >
        {brandData3.map((item) => (
            <SwiperSlide className="single-brand" key={item.id}>
                <img src={item.img} alt="image"/>
            </SwiperSlide>  
        ))}
        
    </Swiper>  
    </motion.div>
    
  )
}

export default BrandSlider