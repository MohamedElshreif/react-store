import React from 'react';
import { LoginWrapper } from './Styled';
import Button from '../Button/Button';

export default class Login extends React.Component {
  render() {
    return (
      <LoginWrapper>
        <form className='needs-validation'>
          <div className='form-row'>
            <div className='col-12 mb-4'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='First name'
                required
              />
            </div>
            <div className='col-12 mb-4'>
              <input
                type='password'
                className='form-control form-control-lg'
                placeholder='password'
                required
              />
            </div>
          </div>
          <Button
            text='SUBMIT'
            color='#fff'
            background='#ed59a0'
            border='1px solid #ed59a0'
            font='10px'
            padding=' 8px 32px'
          />
        </form>
      </LoginWrapper>
    );
  }
}
