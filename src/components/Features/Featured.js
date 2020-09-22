import React from 'react';
import Product from '../Product/product';
import Button from '../Button/Button';
import Title from '../Title/Title';
import { ProductsConsumer } from '../../context/context';
import { FeaturedWrapper } from './Styled.js';

export default function Featured() {
  return (
    <FeaturedWrapper>
      <div className='container'>
        <Title title='featured product' position='center' />
        <div className='row py-5'>
          <ProductsConsumer>
            {(value) => {
              const {
                featuredProducts,
                AddtoCart,
                SetSingleProduct,
                detailsShow,
                AddtoWishList,
              } = value;
              return featuredProducts.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  AddtoCart={AddtoCart}
                  SetSingleProduct={SetSingleProduct}
                  detailsShow={detailsShow}
                  AddtoWishList={AddtoWishList}
                />
              ));
            }}
          </ProductsConsumer>
        </div>
        <div className='text-center'>
          <Button
            text='more products'
            color='#fff'
            background='#ed59a0'
            border='none'
            font='11px'
            padding='10px 32px'
          />
        </div>
      </div>
    </FeaturedWrapper>
  );
}
