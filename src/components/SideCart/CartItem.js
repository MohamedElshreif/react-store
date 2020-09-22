import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CartItem({ item, removeItem, closeCart }) {
  const { title, count, price, image } = item;
  return (
    <li className='item row'>
      <div className='item__img col-4 col-sm-5'>
        <img src={`../${image}`} alt='product' />
      </div>
      <div className='item__info col-8 col-sm-7'>
        <h4 className='name'>
          <Link to={`/SingleProductPage/:${item.id}`} onClick={closeCart}>
            {title}
          </Link>
        </h4>
        <span className='count'>qty : {count}</span>
        <span className='price'>prise : ${price}</span>
        <span className='item__close' onClick={() => removeItem(item.id)}>
          <AiOutlineCloseSquare />
        </span>
      </div>
    </li>
  );
}
