import React from 'react';
import CartColumns from './cartColumns/cartColumns';
import CartList from './cartList/cartList';
import { WrapperCart } from './Styled';
import CartTotal from './cartTotal/cartTotal';

function Cart() {
  return (
    <WrapperCart>
      <div className='container'>
        <div className='cart__content'>
          <CartColumns />
          <CartList />
        </div>
        <CartTotal />
      </div>
    </WrapperCart>
  );
}
export default Cart;
