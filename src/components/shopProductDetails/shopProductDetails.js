import React from 'react';
import { ProDetails } from './Styled';
import { AiOutlineStar } from 'react-icons/ai';
import { IoMdHeartEmpty } from 'react-icons/io';
import { DiGitCompare } from 'react-icons/di';
import Button from '../Button/Button';

export default function ProductDetails({
  product,
  AddtoCart,
  SetSingleProduct,
  col,
}) {
  const { price, company, title, image, description } = product;
  return (
    <ProDetails className={`col-${col || 12}`}>
      <div className='row'>
        <div className='col-5'>
          <div className='proDetails_img'>
            <img src={image} alt='' />
          </div>
        </div>
        <div className='col-7'>
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
            <div className='btns'>
              <Button
                text='Add Cart'
                color='#fff'
                background='#ed59a0'
                border='1px solid #ed59a0'
                font='12px'
              />
              <span>
                <IoMdHeartEmpty />
              </span>
              <span>
                <DiGitCompare />
              </span>
            </div>
          </div>
        </div>
      </div>
    </ProDetails>
  );
}
