import React from 'react';
import Filter from '../../components/filter/filter';
import ShopProducts from '../../components/shopProducts/shopProducts';

function ShopPage() {
  return (
    <>
      <div className='productsWrapper py-5'>
        <div className='container'>
          <div className='row'>
            <Filter col='0' />
            <ShopProducts col='12' />
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
