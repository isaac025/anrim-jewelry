import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navigation/Navbar';
import { GlobalStyle } from '../App.styles';
import history from './history';

function Routes() {
  return (
      <BrowserRouter >
          <GlobalStyle />
            <Navbar />
    </BrowserRouter>
  );
}

export default Routes;
