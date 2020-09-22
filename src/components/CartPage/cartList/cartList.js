import React from 'react';
import { ProductsConsumer } from '../../../context/context';
import CartItem from '../cartItem/cartItem';

export default function CartList() {
  return (
    <div className='cart__list'>
      <div className='row'>
        <div className='col'>
          <ProductsConsumer>
            {(value) => {
              const { cart, increment, decrement, removeItem } = value;
              return (
                <>
                  {cart.map((item) => {
                    return (
                      <CartItem
                        key={item.id}
                        decrement={decrement}
                        increment={increment}
                        removeItem={removeItem}
                        item={item}
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
