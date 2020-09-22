import React from 'react';
import { Item } from './Styled';
import CountProduct from '../../CountProduct/CountProduct';

import { AiOutlineCloseSquare } from 'react-icons/ai';
export default function CartItem({ item, decrement, increment, removeItem }) {
  const { title, price, image, total, count } = item;

  return (
    <Item>
      <div className='row'>
        <div className='col-4 col-lg-2 d-flex justify-content-center'>
          <div className='product_image'>
            <img src={image} alt='' />
          </div>
        </div>
        <div className='col-8 d-md-none pt-2'>
          <div className='row'>
            <div className='col-lg-3 d-flex justify-content-lg-center align-items-center'>
              <div className='product_name'>
                <h3>{title}</h3>
              </div>
            </div>
            <div className='col-lg-2 d-flex justify-content-lg-center align-items-center'>
              <div className='product_price'>price : {price}.000$</div>
            </div>
            <div className='col-lg-2 d-flex align-items-center justify-content-lg-center my-1'>
              <CountProduct count={count} item={item} />
            </div>
            <div className='col-lg-1 d-flex align-items-center justify-content-lg-center'>
              <div className='product_total'>Total : {total}.000$</div>
            </div>
            <span onClick={() => removeItem(item.id)} className='remove'>
              <AiOutlineCloseSquare />
            </span>
          </div>
        </div>
        <div className='d-none d-md-flex col-lg-3 justify-content-lg-center align-items-center'>
          <div className='product_name'>
            <h3>{title}</h3>
          </div>
        </div>
        <div className='col-lg-2 d-none d-md-flex  justify-content-lg-center align-items-center'>
          <div className='product_price'> {price}.000$</div>
        </div>
        <div className='col-lg-2 d-none d-md-flex  align-items-center justify-content-lg-center'>
          <CountProduct count={count} item={item} />
        </div>
        <div className='col-lg-1 d-none d-md-flex  align-items-center justify-content-lg-center'>
          <div className='product_total'>{total}.000$</div>
        </div>
        <div className='col-lg-2 d-none d-md-flex  justify-content-lg-center align-items-center'>
          <div className='product_remove'>
            <span onClick={() => removeItem(item.id)}>
              <AiOutlineCloseSquare />
            </span>
          </div>
        </div>
      </div>
    </Item>
  );
}
