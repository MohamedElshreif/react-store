import React from 'react';
import { Item } from './Styled';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import Button from '../../Button/Button';
import { Link } from 'react-router-dom';

export default function WishListItem({ item, removeItem, SetSingleProduct }) {
  const { title, price, image } = item;

  return (
    <Item>
      <div className='row'>
        <div className='col-4 col-lg-2 d-flex justify-content-center'>
          <div className='product_image'>
            <img src={image} alt='' />
          </div>
        </div>
        <div className='col-8 d-md-none pt-3'>
          <div className='row'>
            <div className='col-lg-3 d-flex justify-content-start align-items-center'>
              <div className='product_name'>
                <h3>{title}</h3>
              </div>
            </div>
            <div className='col-lg-3 d-flex justify-content-start align-items-center'>
              <div className='product_price'>Price : {price}.000$</div>
            </div>
            <div className='col-lg-2 d-flex align-items-center justify-content-start'>
              <div>
                <Link
                  to={`/SingleProductPage/:${item.id}`}
                  onClick={() => SetSingleProduct(item.id)}
                >
                  <Button
                    text='Select Option'
                    color='#fff'
                    background='#ed59a0'
                    border='1px solid #ed59a0'
                    font='9px'
                    padding='7px 17px'
                  />
                </Link>
              </div>
            </div>
            <span onClick={() => removeItem(item.id)} className='remove'>
              <AiOutlineCloseSquare />
            </span>
          </div>
        </div>
        <div className='col-lg-3 d-none d-md-flex justify-content-center align-items-center'>
          <div className='product_name'>
            <h3>{title}</h3>
          </div>
        </div>
        <div className='col-lg-3 d-none d-md-flex justify-content-center align-items-center'>
          <div className='product_price'>{price}.000$</div>
        </div>
        <div className='col-lg-2 d-none d-md-flex align-items-center justify-content-center'>
          <div>
            <Link to={`/SingleProductPage/:${item.id}`}>
              <Button
                text='Select Option'
                color='#fff'
                background='#ed59a0'
                border='1px solid #ed59a0'
                font='11px'
              />
            </Link>
          </div>
        </div>
        <div className='col-lg-2 d-none d-md-flex justify-content-center align-items-center'>
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
