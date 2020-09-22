import React from 'react';
import { CartHead } from './Styled';

export default function CartColumns() {
  return (
    <CartHead className='d-none d-md-block'>
      <div className='row'>
        <div className='col-lg-2 d-flex align-items-center justify-content-center'>
          <p className='text-uppercase'>IMAGE</p>
        </div>
        <div className='col-lg-3 d-flex align-items-center justify-content-center'>
          <p className='text-uppercase'>PRODUCT NAME</p>
        </div>
        <div className='col-lg-2 d-flex align-items-center justify-content-center'>
          <p className='text-uppercase'>UNIT PRICE</p>
        </div>
        <div className='col-lg-2 d-flex align-items-center justify-content-center'>
          <p className='text-uppercase'>QTY</p>
        </div>
        <div className='col-lg-1 d-flex align-items-center justify-content-center'>
          <p className='text-uppercase'>SUBTOTAL</p>
        </div>
        <div className='col-lg-2 d-flex align-items-center justify-content-center'>
          <p className='text-uppercase'>ACTION</p>
        </div>
      </div>
    </CartHead>
  );
}
