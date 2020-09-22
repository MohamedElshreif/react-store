import React from 'react';
import { FaThList } from 'react-icons/fa';
import {
  BsFillGrid3X3GapFill,
  BsFillGridFill,
  BsFilterLeft,
} from 'react-icons/bs';
import { SortWrapper } from './Styled';
import { ProductsConsumer } from '../../context/context';

export default function Sort() {
  return (
    <ProductsConsumer>
      {(value) => {
        const { productsGrid, sortPrice, nameGrid } = value;
        return (
          <SortWrapper>
            <div className='row pb-4'>
              <div className='col-8 col-md-6 d-flex justify-content-start'>
                <div className='select--container'>
                  <select
                    className='form-control'
                    onChange={(e) => sortPrice(e.target.value)}
                  >
                    <option value='default'>Default</option>
                    <option value='high'>Price-High To Low</option>
                    <option value='low'>Price-Low To High</option>
                  </select>
                </div>
              </div>
              <div className='col-4 d-flex d-md-none justify-content-end align-items-center'>
                <span>
                  <BsFilterLeft />
                </span>
              </div>
              <div className='col-6 d-none d-md-flex justify-content-end align-items-center'>
                <div className='sort__icon'>
                  <span
                    onClick={() => productsGrid(4, 'three')}
                    className={nameGrid === 'three' ? 'active' : ''}
                  >
                    <BsFillGrid3X3GapFill />
                  </span>
                  <span
                    onClick={() => productsGrid(6, 'two')}
                    className={nameGrid === 'two' ? 'active' : ''}
                  >
                    <BsFillGridFill />
                  </span>
                  <span
                    onClick={() => productsGrid(12, 'one')}
                    className={nameGrid === 'one' ? 'active' : ''}
                  >
                    <FaThList />
                  </span>
                </div>
              </div>
            </div>
          </SortWrapper>
        );
      }}
    </ProductsConsumer>
  );
}
