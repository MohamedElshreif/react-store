import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Navbar/nav';
import SideCart from './components/SideCart/SideCart';
import ShopPage from './pages/Shop/ShopPage';
import CartPage from './pages/CartPage/CartPage';
import ContactPage from './pages/Contact/ContactPage';
import Default from './pages/Default/Default';
import LoginPage from './pages/login-register/login-register';
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import Footer from './components/Footer/Footer';
import DetailsBox from './components/DetailsProductBox/DetailsProduct';
import WishListPage from './pages/wishList/wishList';

function App() {
  return (
    <>
      <Nav />
      <SideCart />
      <DetailsBox />
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/ShopPage' exact component={ShopPage} />
        <Route path='/ContactPage' component={ContactPage} />
        <Route path='/SingleProductPage/:id' component={SingleProductPage} />
        <Route path='/CartPage' component={CartPage} />
        <Route path='/login-register' component={LoginPage} />
        <Route path='/wishList' component={WishListPage} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
