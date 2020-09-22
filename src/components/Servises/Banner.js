import React from 'react';
import { BannerWrapper } from './Styled.js';
import Button from '../Button/Button';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <BannerWrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 banner__column'>
            <Link to='/ShopPage'>
              <img src='./img/banner.webp' alt='' />
            </Link>
            <div className='banner_text banner-left'>
              <span className='price'>-20% off</span>
              <h2 className='text-uppercase'>new tulip</h2>
              <p>best for your mind</p>
              <Button
                text='shop new'
                color='#fff'
                background='#ed59a0'
                border='none'
                font='10px'
                padding='10px 29px'
              />
            </div>
          </div>
          <div className='col-12 col-md-6 banner__column'>
            <div className='banner__single pb-4'>
              <Link to='/ShopPage'>
                <img src='./img/banner-2.webp' alt='' />
              </Link>
              <div className='banner_text banner-left'>
                <h3 className='text-uppercase'> pink tulip</h3>
                <span className='start'>
                  starting at <span>$99.00</span>
                </span>
                <span className='banner_icon'>
                  <RiArrowRightCircleLine />
                </span>
              </div>
            </div>
            <div className='banner__single mb-4'>
              <Link to='/ShopPage'>
                <img src='./img/banner-1.webp' alt='' />
              </Link>
              <div className='banner_text  banner-right'>
                <h3 className='text-uppercase'> pink tulip</h3>
                <span className='start'>
                  starting at <span>$99.00</span>
                </span>
                <span className='banner_icon'>
                  <RiArrowRightCircleLine />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
}
