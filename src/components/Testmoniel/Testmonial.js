import React from 'react';
import { FaMapSigns } from 'react-icons/fa';
// import Swiper core and required components
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/autoplay';

import { Testmon } from './Styled';

SwiperCore.use([Autoplay]);

export default function Testmonials() {
  return (
    <Testmon>
      <div className=' container'>
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={true}>
          <SwiperSlide>
            <div className='img-conainer'>
              <img src='./img/testmonial-1.webp' alt='' />
            </div>
            <p className='massege'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div>
              <FaMapSigns className='testmon__icon' />
            </div>
            <h4 className='name'>John Doe</h4>
            <span>customer</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-conainer'>
              <img src='./img/testmonial-2.webp' alt='' />
            </div>
            <p className='massege'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div>
              <FaMapSigns className='testmon__icon' />
            </div>
            <h4 className='name'>John Doe</h4>
            <span>customer</span>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-conainer'>
              <img src='./img/testmonial-3.webp' alt='' />
            </div>
            <p className='massege'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div>
              <FaMapSigns className='testmon__icon' />
            </div>
            <h4 className='name'>John Doe</h4>
            <span>customer</span>
          </SwiperSlide>
        </Swiper>
      </div>
    </Testmon>
  );
}
