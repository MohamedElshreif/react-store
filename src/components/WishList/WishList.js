import React from 'react';
import WishListColumns from './columns/columns';
import WishListList from './list/list';
import { WrapperCart } from './Styled';

function WishList() {
  return (
    <WrapperCart>
      <div className='container'>
        <div className='cart__content'>
          <WishListColumns />
          <WishListList />
        </div>
      </div>
    </WrapperCart>
  );
}
export default WishList;
