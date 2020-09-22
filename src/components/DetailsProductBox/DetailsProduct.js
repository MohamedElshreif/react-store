import React from 'react';
import { ProductsConsumer } from '../../context/context';
import { ModalProduct } from './Styled';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import WrapperDetails from '../detailsProduct/detailsProduct';

export default function DetailsBox() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { detailsOpen, singleProduct, detailsShow } = value;
        const { id } = singleProduct;
        return (
          <ModalProduct display={detailsOpen ? 'active' : ''}>
            <div
              className='product__modal'
              onClick={() => detailsShow(id)}
            ></div>
            <div className='product__details'>
              <div className='prodct__details__head'>
                <span onClick={() => detailsShow(id)}>
                  <AiOutlineCloseSquare />
                </span>
              </div>
              <WrapperDetails singleProduct={singleProduct} />
            </div>
          </ModalProduct>
        );
      }}
    </ProductsConsumer>
  );
}
