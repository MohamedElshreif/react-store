import React from 'react';
import { ProductWrapper } from './Styled.js';
import { Link } from 'react-router-dom';
import { FaEye, FaShoppingCart, FaRegHeart } from 'react-icons/fa';
import { DiGitCompare } from 'react-icons/di';
export default function Product({
  product,
  AddtoCart,
  SetSingleProduct,
  detailsShow,
  col,
  AddtoWishList,
}) {
  const { image, price, title } = product;
  return (
    <ProductWrapper className={`col-12 col-sm-6 col-lg-${col || 3}`}>
      <div className='product'>
        <div className='product__image'>
          <img className='img' src={`../${image}`} alt='product' />
          <img
            className='hover--img'
            src='../img/flower-5.webp'
            alt='product'
          />
          <span className='pink'>-{price}%</span>
          <ul>
            <li>
              <span
                className='product_icon'
                onClick={() => AddtoCart(product.id)}
              >
                <FaShoppingCart />
              </span>
            </li>
            <li>
              <span
                className='product_icon'
                onClick={() => detailsShow(product.id)}
              >
                <FaEye />
              </span>
            </li>
            <li>
              <span className='product_icon'>
                <DiGitCompare />
              </span>
            </li>
          </ul>
        </div>
        <div className='product__info'>
          <div className='title'>
            <span className='title__text'>
              <Link
                onClick={() => SetSingleProduct(product.id)}
                to={`/SingleProductPage/:${product.id}`}
              >
                {title}
              </Link>
            </span>
            <span
              className='title__icon'
              onClick={() => AddtoWishList(product.id)}
            >
              <FaRegHeart />
            </span>
          </div>
          <div className='price'>
            <span>${price}</span>
          </div>
        </div>
      </div>
    </ProductWrapper>
  );
}
