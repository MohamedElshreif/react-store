import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductsConsumer } from '../../context/context';
import { Link } from 'react-router-dom';
import { BsHeart, BsSearch } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';

export default function HeadNavbar() {
  return (
    <ProductsConsumer>
      {(value) => {
        const {
          handleSideCart,
          cartItems,
          wishlist,
          dropDownHandler,
          dropdown,
          closeDropDown,
        } = value;
        return (
          <header>
            <div className='container'>
              <div className='row header__rowNav py-sm-4 py-3 '>
                <div className='col-4 d-flex justify-content-start align-items-center'>
                  <h2 className='text-capitalize font-weight-bold'>
                    {' '}
                    <Link to='/'>flone.</Link>
                  </h2>
                </div>
                <div className='col-2 order-2 d-flex justify-content-end align-items-center d-md-none'>
                  <span onClick={() => dropDownHandler()}>
                    <FaBars />
                  </span>
                </div>
                <div className='col-4  justify-content-center align-items-center d-none d-md-flex'>
                  <nav>
                    <ul className='list-unstyled d-flex pt-2'>
                      <li>
                        <Link to='/' className='link-nav'>
                          home
                        </Link>
                      </li>
                      <li>
                        <Link to='/ShopPage' className='link-nav'>
                          shop
                        </Link>
                      </li>
                      <li>
                        <Link to='/CartPage' className='link-nav'>
                          cart
                        </Link>
                      </li>
                      <li>
                        <Link to='/ContactPage' className='link-nav'>
                          content
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='col-6 col-md-4  justify-content-end align-items-center d-flex'>
                  <span className='icon' style={{ fontSize: '17px' }}>
                    <Link to='/login-register' onClick={closeDropDown}>
                      <AiOutlineUser />
                    </Link>
                  </span>
                  <span className='icon'>
                    <BsSearch />
                  </span>
                  <span className='icon'>
                    <Link to='/wishList' onClick={closeDropDown}>
                      {' '}
                      <BsHeart />
                      <span className='count'>{wishlist.length}</span>
                    </Link>
                  </span>
                  <span className='icon' onClick={() => handleSideCart()}>
                    <MdAddShoppingCart />
                    <span className='count'>{cartItems}</span>
                  </span>
                </div>
                <div
                  className={`dropdown d-md-none ${dropdown ? 'active' : ''}`}
                  onClick={closeDropDown}
                >
                  <nav>
                    <ul className='list-unstyled pt-2'>
                      <li>
                        <Link to='/' className='link-nav'>
                          home
                        </Link>
                      </li>
                      <li>
                        <Link to='/ShopPage' className='link-nav'>
                          shop
                        </Link>
                      </li>
                      <li>
                        <Link to='/CartPage' className='link-nav'>
                          cart
                        </Link>
                      </li>
                      <li>
                        <Link to='/ContactPage' className='link-nav'>
                          content
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
        );
      }}
    </ProductsConsumer>
  );
}
