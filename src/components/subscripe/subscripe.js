import React from 'react';
import { Sub } from './Styled';
import Title from '../Title/Title';
import Button from '../Button/Button';

export default function SubScribe() {
  return (
    <Sub>
      <div className='container'>
        <Title title='subscribe' position='center' />
        <p>Subscribe to our newsletter to receive news on update</p>
        <form>
          <input type='text' placeholder='your email address' />
          <Button
            text='subscribe'
            color='#fff'
            background='#ed59a0'
            border='none'
            font='11px'
            padding='10px 32px'
          />
        </form>
      </div>
    </Sub>
  );
}
