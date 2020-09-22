import React from 'react';
import { ProductsConsumer } from '../../context/context';
import WrapperDetails from '../../components/detailsProduct/detailsProduct';
import RelatedProducts from '../../components/relatedProducts/relatedProducts';

function SingleProductPage() {
  return (
    <>
      <ProductsConsumer>
        {(value) => {
          const { singleProduct, AddtoCart, AddtoWishList } = value;

          return (
            <div className='py-5'>
              <div className='container'>
                <WrapperDetails
                  singleProduct={singleProduct}
                  AddtoWishList={AddtoWishList}
                  addtoCart={AddtoCart}
                />
                <RelatedProducts
                  addtoCart={AddtoCart}
                  AddtoWishList={AddtoWishList}
                />
              </div>
            </div>
          );
        }}
      </ProductsConsumer>
    </>
  );
}

export default SingleProductPage;
