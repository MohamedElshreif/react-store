import React from 'react';
import Button from '../Button/Button';
import { WrapperContact } from './Styled';
import { GiEarthAfricaEurope } from 'react-icons/gi';
import { FiPhone, FiMapPin } from 'react-icons/fi';
export default function Contact() {
  return (
    <WrapperContact className='py-3 py-md-5'>
      <div className='row my-3 mt-3 mt-md-5'>
        <div className='col-12 col-md-7 mx-auto'>
          <form>
            <div className='form-group'>
              <input
                type='text'
                name='userName'
                placeholder='Mohamed Elshrief'
                className='form-control form-control-lg'
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                placeholder='content@Email.com'
                className='form-control form-control-lg'
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                name='subject'
                placeholder='Subject'
                className='form-control form-control-lg'
              />
            </div>
            <div className='form-group'>
              <textarea
                name='message'
                rows='5'
                placeholder='Hello there body'
                className='form-control form-control-lg'
              />
            </div>
            <div className='form-group mt-2'>
              <Button
                text='SEND'
                color='#ed59a0'
                background='transparent'
                border='1px solid #ed59a0'
                font='12px'
                padding='8px 32px'
              ></Button>
            </div>
          </form>
        </div>
        <div className='col-12 col-md-5'>
          <ul className='contact__info'>
            <li>
              <div className='icon'>
                <GiEarthAfricaEurope />
              </div>
              <div className='text'>
                <span>urname@email.com</span>
              </div>
            </li>
            <li>
              <div className='icon'>
                <FiPhone />
              </div>
              <div className='text'>
                <span>+012 345 678 102</span>
              </div>
            </li>
            <li>
              <div className='icon'>
                <FiMapPin />
              </div>
              <div className='text'>
                <span>Address goes here, street, Crossroad 123.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </WrapperContact>
  );
}
