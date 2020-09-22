import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';
import { ProductsConsumer } from '../../context/context';
import { CountWrapper } from './Styled';

export default function CountProduct({ count, item, padding }) {
  const id = item.id;
  return (
    <ProductsConsumer>
      {(value) => {
        const { decrement, increment } = value;
        return (
          <CountWrapper padding={padding}>
            <div className='increment'>
              <span onClick={() => increment(id)}>
                <BsPlus />
              </span>
            </div>
            {count}
            <div className='decrement'>
              <span onClick={() => decrement(id)}>
                <FiMinus />
              </span>
            </div>
          </CountWrapper>
        );
      }}
    </ProductsConsumer>
  );
}
