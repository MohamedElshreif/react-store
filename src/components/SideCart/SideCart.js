import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { ProductsConsumer } from '../../context/context';
import { CartWrapper } from './styled.js';
import CartItem from './CartItem';

function SideCart() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { cart, sideCartOpen, removeItem, cartTatal, closeCart } = value;
        return (
          <CartWrapper show={sideCartOpen}>
            {cart.length === 0 ? (
              <div className='empty'>
                <span>The Cart is Empty</span>
              </div>
            ) : (
              <ul>
                {cart.map((item) => {
                  return (
                    <CartItem
                      key={item.id}
                      item={item}
                      removeItem={removeItem}
                      closeCart={closeCart}
                    />
                  );
                })}
              </ul>
            )}

            <div className='total'>
              <span>total : ${cartTatal}</span>
            </div>
            <div className='btns'>
              <div className='view-cart'>
                <Link to='/CartPage' onClick={closeCart}>
                  <Button
                    text='view cart'
                    color='#ed59a0'
                    background='transparent'
                    border='1px solid #ed59a0'
                    font='10px'
                    padding='10px 32px'
                  />
                </Link>
              </div>
              <div>
                <Button
                  text='checkout'
                  color='#ed59a0'
                  background='transparent'
                  border='1px solid #ed59a0'
                  font='10px'
                  padding='10px 32px'
                />
              </div>
            </div>
          </CartWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

export default SideCart;
