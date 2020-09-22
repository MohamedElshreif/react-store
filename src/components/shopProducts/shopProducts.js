import React from 'react';
import { ProductsWrapper } from './Styled';
import Product from '../Product/product';
import { ProductsConsumer } from '../../context/context';
import Sort from '../sort/sort';
import ProductDetails from '../shopProductDetails/shopProductDetails';

export default function ShopProducts() {
  return (
    <ProductsConsumer>
      {(value) => {
        const {
          filterdProducts,
          numberGrid,
          AddtoCart,
          SetSingleProduct,
          detailsShow,
          AddtoWishList,
        } = value;
        return (
          <ProductsWrapper className='col-12 col-md-9'>
            <Sort />
            <div className='row'>
              {numberGrid !== 12
                ? filterdProducts.map((product) => {
                    return (
                      <Product
                        key={product.id}
                        AddtoCart={AddtoCart}
                        SetSingleProduct={SetSingleProduct}
                        detailsShow={detailsShow}
                        product={product}
                        col={numberGrid}
                        AddtoWishList={AddtoWishList}
                      />
                    );
                  })
                : filterdProducts.map((product) => {
                    return (
                      <ProductDetails
                        key={product.id}
                        AddtoCart={AddtoCart}
                        SetSingleProduct={SetSingleProduct}
                        detailsShow={detailsShow}
                        product={product}
                        col={numberGrid}
                        AddtoWishList={AddtoWishList}
                      />
                    );
                  })}
            </div>
          </ProductsWrapper>
        );
      }}
    </ProductsConsumer>
  );
}
