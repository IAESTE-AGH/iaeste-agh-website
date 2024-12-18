import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper-bundle.css'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 

function Carousel({ direction = 'ltr', images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      spaceBetween={10}
      slidesPerView={4}
      style={{
        direction: direction === 'rtl' ? 'rtl' : 'ltr',
      }}
      breakpoints={{
        768: { slidesPerView: 3 },
        480: { slidesPerView: 2 },
      }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index}`}
            style={{
              width: '80%',
              borderRadius: '32px',
              border: '3px solid #ddd',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://www.google.pl/?hl=pl', '_blank')}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;