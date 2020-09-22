import React from 'react';
import { ProductsConsumer } from '../../../context/context';
import { WrapperTotal } from './Styled';
export default function CartTotal() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { cartTatal, cartSubTotal } = value;
        return (
          <WrapperTotal>
            <div>
              SubTotal : <span> {cartSubTotal}$</span>
            </div>
            <div>
              Total : <span> {cartTatal}$</span>
            </div>
          </WrapperTotal>
        );
      }}
    </ProductsConsumer>
  );
}
