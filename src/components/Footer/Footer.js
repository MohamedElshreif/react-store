import React from 'react';
import { FooterWrapper } from './Styled';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function Footer() {
  return (
    <FooterWrapper>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-2'>
            <div className='copyright'>
              <div className='footer-logo'>
                <h2 className='text-capitalize font-weight-bold'>
                  <Link to='/'>flone.</Link>
                </h2>
              </div>
              <p>© 2020 Flone. All Rights Reserved</p>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-2'>
            <div className='footer-widget'>
              <h3 className='footer-title'>ABOUT US</h3>
              <ul className='footer-list'>
                <li>
                  <Link to='/'>About us</Link>
                </li>
                <li>
                  <Link to='/'>Store location</Link>
                </li>
                <li>
                  <Link to='/ContactPage'>Contact</Link>
                </li>
                <li>
                  <Link to='/'>Orders tracking</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-2'>
            <div className='footer-widget'>
              <h3 className='footer-title'>USEFUL LINKS</h3>
              <ul className='footer-list'>
                <li>
                  <Link to='/'>Returns</Link>
                </li>
                <li>
                  <Link to='/'>Support Policy</Link>
                </li>
                <li>
                  <Link to='/'>Size guide</Link>
                </li>
                <li>
                  <Link to='/'>FAQs</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-2'>
            <div className='footer-widget'>
              <h3 className='footer-title'>FOLLOW US</h3>
              <ul className='footer-list'>
                <li>
                  <Link to='/'>Facebook</Link>
                </li>
                <li>
                  <Link to='/'>Twitter</Link>
                </li>
                <li>
                  <Link to='/'>Instagram</Link>
                </li>
                <li>
                  <Link to='/'>Youtube</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-md-6 col-xl-4'>
            <h3 className='footer-title'>SUBSCRIBE</h3>
            <div className='subscribe-style'>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <form>
                <input type='text' placeholder='Enter Your Address Email' />
                <Button
                  text='subscribe'
                  color='#fff'
                  background='#ed59a0'
                  border='none'
                  font='10px'
                  padding='10px 32px'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
