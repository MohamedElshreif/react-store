import React from 'react';
import { ProDetails } from './Styled';
import { AiOutlineStar } from 'react-icons/ai';
import Button from '../Button/Button';
import CountProduct from '../CountProduct/CountProduct';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { IoMdHeartEmpty } from 'react-icons/io';

export default function WrapperDetails({
  singleProduct,
  addtoCart,
  AddtoWishList,
}) {
  const { price, company, title, image, description, count } = singleProduct;
  return (
    <ProDetails>
      <div className='row'>
        <div className='col-12 col-md-5'>
          <div className='proDetails_img'>
            <img src={`../${image}`} alt='flower' />
          </div>
        </div>
        <div className='col-12 col-md-7'>
          <div className='proDetails_info'>
            <h3 className='title'>
              <span>brand :</span> {title}
            </h3>
            <div className='price'>
              <span>price : </span>
              {price}.000$
            </div>
            <h4 className='model'>
              {' '}
              <span>model :</span> {company}
            </h4>
            <ul className='list-stars'>
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
              <li>
                <AiOutlineStar />
              </li>
            </ul>
            <p className='desc'> {description}</p>
            <div className='btns d-flex align-items-center'>
              <div className='count'>
                <CountProduct
                  item={singleProduct}
                  count={count}
                  padding='11px 0'
                />
              </div>
              <div className='button'>
                <span onClick={() => addtoCart(singleProduct.id)}>
                  <Button
                    text='ADD To CART'
                    color='#ed59a0'
                    background='transparent'
                    border='1px solid #ed59a0'
                    font='10px'
                    padding='10px 32px'
                  />
                </span>
              </div>
              <div className='wishlist'>
                <span onClick={() => AddtoWishList(singleProduct.id)}>
                  <IoMdHeartEmpty />
                </span>
              </div>
            </div>
            <div className='socailMedia'>
              <span>
                <GrFacebookOption />
              </span>
              <span>
                <GrTwitter />
              </span>
              <span>
                <GrLinkedinOption />
              </span>
            </div>
          </div>
        </div>
      </div>
    </ProDetails>
  );
}
