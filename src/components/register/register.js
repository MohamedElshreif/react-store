import React from 'react';
import { RegisterWrapper } from './Styled';
import Button from '../Button/Button';

export default class Register extends React.Component {
  render() {
    return (
      <RegisterWrapper>
        <form className='needs-validation'>
          <div className='form-row'>
            <div className='col-6 mb-4'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='First name'
                required
              />
            </div>
            <div className='col-6 mb-4'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Last name'
                required
              />
            </div>
            <div className='col-12 mb-4'>
              <div className='input-group'>
                <div className='input-group-prepend'></div>
                <input
                  type='text'
                  className='form-control form-control-lg'
                  id='validationCustomUsername'
                  placeholder='Username'
                  aria-describedby='inputGroupPrepend'
                  required
                />
              </div>
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
          <div className='form-row'>
            <div className='col-md-6 mb-4'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='City'
                required
              />
            </div>
            <div className='col-md-6 mb-4'>
              <input
                type='text'
                className='form-control form-control-lg'
                id='validationCustom04'
                placeholder='State'
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
            padding='8px 32px'
          />
        </form>
      </RegisterWrapper>
    );
  }
}
