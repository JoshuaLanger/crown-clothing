import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';

const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/shop" component={ShopPage} />
  </div>
);

export default App;
