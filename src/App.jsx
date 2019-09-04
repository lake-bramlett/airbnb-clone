import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Bookingbox from './components/Bookingbox';

import Routes from './Routes';

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Bookingbox />
    </div>
  </BrowserRouter>
);

export default App;
