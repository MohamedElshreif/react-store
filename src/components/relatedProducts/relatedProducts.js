import React from 'react';
import { ProductsConsumer } from '../../context/context';
import { RelatedWrapper } from './styled';
import Product from '../Product/product';

export default function RelatedProducts() {
  return (
    <ProductsConsumer>
      {(value) => {
        const {
          AddtoCart,
          relatedProduct,
          SetSingleProduct,
          detailsShow,
          AddtoWishList,
        } = value;
        return (
          <RelatedWrapper>
            <div className='related__head'>
              <h2>Related Products</h2>
            </div>
            <div className='relted_products'>
              <div className='row'>
                {relatedProduct.map((product) => {
                  return (
                    <Product
                      key={product.id}
                      AddtoCart={AddtoCart}
                      SetSingleProduct={SetSingleProduct}
                      detailsShow={detailsShow}
                      product={product}
                      AddtoWishList={AddtoWishList}
                    />
                  );
                })}
              </div>
            </div>
          </RelatedWrapper>
        );
      }}
    </ProductsConsumer>
  );
}
