import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../components/CartPage/cart';
import CartBtnsShop from '../../components/CartPage/cartBtnsShop';
import { CartPageWrapper } from './Styled';
import Button from '../../components/Button/Button';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { ProductsConsumer } from '../../context/context';

function CartPage() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { cart } = value;
        return (
          <CartPageWrapper>
            {cart.length !== 0 ? (
              <>
                <Cart />
                <CartBtnsShop />
              </>
            ) : (
              <div className='cart--empty'>
                <div className='container'>
                  <div className='empty-content'>
                    <span>
                      <AiOutlineShoppingCart />
                    </span>
                    <p>No items found in Cart</p>
                    <Link to='/ShopPage'>
                      {' '}
                      <Button
                        text='Add Items'
                        color='#fff'
                        background='#ed59a0'
                        border='1px solid #ed59a0'
                        font='9px'
                        padding='7px 23px'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </CartPageWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

export default CartPage;
