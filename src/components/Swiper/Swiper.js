import React from 'react';
import { Link } from 'react-router-dom';
// import Swiper core and required components
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/autoplay';
import { InterFace } from './Styled';
import Button from '../Button/Button';

SwiperCore.use([Autoplay]);
export default function SwiperPage() {
  return (
    <InterFace>
      {/* <div className='overlay'></div> */}
      <div className='interface__text'>
        <h1>
          Fresh Your Mind & <br /> Feeling love
        </h1>
        <Link to='/ShopPage'>
          <Button
            text='SHOP NOW'
            color='#222'
            background='#ed59a0'
            border='1px solid #ed59a0'
            font='10px'
            padding='10px 32px'
          />
        </Link>
      </div>
      <Swiper
        tag='section'
        wrapperTag='ul'
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
      >
        <SwiperSlide tag='li'>
          <img src='./img/swiper-1.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src='./img/swiper-2.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src='./img/swiper-3.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src='./img/swiper-4.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src='./img/swiper-5.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src='./img/swiper-6.webp' alt='' />
        </SwiperSlide>
        <SwiperSlide tag='li'>
          <img src='./img/swiper-7.webp' alt='' />
        </SwiperSlide>
      </Swiper>
    </InterFace>
  );
}
