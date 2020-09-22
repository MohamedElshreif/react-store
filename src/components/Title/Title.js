import React from 'react';
import { TitleWrapper } from './Styled.js';

function Title({ title, position }) {
  return (
    <TitleWrapper className='row' position={position}>
      <div className='col'>
        <h2 className='text-title'>{title}</h2>
      </div>
    </TitleWrapper>
  );
}

export default Title;
