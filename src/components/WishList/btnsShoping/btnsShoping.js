import React from 'react';
import Button from '../../Button/Button';

export default function WishListBtns() {
  return (
    <div className='cartPage_Btns py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 d-flex align-items-center justify-content-start'>
            <Button
              text='CONTINUE SHOPPING'
              color='#ed59a0'
              background='transparent'
              border='1px solid #ed59a0'
              font='10px'
              padding='11px 20px'
            />
          </div>
          <div className='col-6 d-flex align-items-center justify-content-end'>
            <Button
              text='CLARE WISHLIST'
              color='#ed59a0'
              background='transparent'
              border='1px solid #ed59a0'
              font='10px'
              padding='11px 20px'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
