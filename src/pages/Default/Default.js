import React from 'react';
import Button from '../../components/Button/Button';
import { DefaultWrapper } from './styled';

function Default() {
  return (
    <DefaultWrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>404</h1>
          </div>
          <div className='col-12'>
            <h3>OPPS! PAGE NOT FOUND</h3>
            <p>
              Sorry but the page you are looking for does not exist, have been
              removed, name changed or is temporarity unavailable.
            </p>
          </div>
          <div className='col-12'>
            <Button
              text='Back To Home Page'
              color='#fff'
              background='#ed59a0'
              border='1px solid #ed59a0'
              font='14px'
            />
          </div>
        </div>
      </div>
    </DefaultWrapper>
  );
}

export default Default;
