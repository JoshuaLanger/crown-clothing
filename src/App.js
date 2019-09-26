import React from 'react';
import { Route } from 'react-router-dom';

// Styles
import './App.css';

// Pages
import HomePage from './pages/homepage/HomePage';

// Temp Component
const HatsPage = () => (
  <div>
    <h1>HATS PAGE!</h1>
  </div>
);

const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route path="/hats" component={HatsPage} />
  </div>
);

export default App;
