import React from 'react';
import { ProductsConsumer } from '../../../context/context';
import WishItem from '../item/item';

export default function WishListList() {
  return (
    <div className='cart__list'>
      <div className='row'>
        <div className='col'>
          <ProductsConsumer>
            {(value) => {
              const { wishlist, removeItemWishList, SetSingleProduct } = value;
              return (
                <>
                  {wishlist.map((item) => {
                    return (
                      <WishItem
                        key={item.id}
                        removeItem={removeItemWishList}
                        item={item}
                        SetSingleProduct={SetSingleProduct}
                      />
                    );
                  })}
                </>
              );
            }}
          </ProductsConsumer>
        </div>
      </div>
    </div>
  );
}
