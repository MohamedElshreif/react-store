import React from 'react';
import { Pathwrapper } from './Styled';

export default function Path() {
  return (
    <Pathwrapper>
      <div className='container'>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
          </div>
        </div>
      </div>
    </Pathwrapper>
  );
}
