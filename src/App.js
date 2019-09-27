import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import LoginRegisterPage from './pages/login-register/LoginRegister';

// Components
import Header from './components/header/Header';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/login" component={LoginRegisterPage} />
  </div>
);

export default App;
