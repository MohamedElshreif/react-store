import React from 'react';
import Button from '../Button/Button';

function CartBtnsShop() {
  return (
    <div className='cartPage_Btns py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 d-flex  align-items-center justify-content-start'>
            <Button
              text='CONTINUE SHOPPING'
              color='#ed59a0'
              background='transparent'
              border='1px solid #ed59a0'
              font='10px'
              padding='10px 21px'
            />
          </div>
          <div className='col-6   d-flex align-items-center justify-content-end'>
            <Button
              text='CLARE CART'
              color='#ed59a0'
              background='transparent'
              border='1px solid #ed59a0'
              font='10px'
              padding='10px 30px'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartBtnsShop;
