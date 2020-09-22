import React from 'react';
import { Link } from 'react-router-dom';
import { ProductsConsumer } from '../../context/context';
import WishList from '../../components/WishList/WishList';
import WishListBtns from '../../components/WishList/btnsShoping/btnsShoping';
import { BsHeart } from 'react-icons/bs';
import Button from '../../components/Button/Button';
import { WishListWrapper } from './Styled';

function WishListPage() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { wishlist } = value;
        return (
          <WishListWrapper>
            {wishlist.length !== 0 ? (
              <>
                <WishList />
                <WishListBtns />
              </>
            ) : (
              <div className='wishList--empty'>
                <div className='container'>
                  <div className='empty-content'>
                    <span>
                      <BsHeart />
                    </span>
                    <p>No items found in wishlist</p>
                    <Link to='/ShopPage'>
                      {' '}
                      <Button
                        text='Add Items'
                        color='#fff'
                        background='#ed59a0'
                        border='1px solid #ed59a0'
                        font='11px'
                        padding='10px 32px'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </WishListWrapper>
        );
      }}
    </ProductsConsumer>
  );
}

export default WishListPage;
