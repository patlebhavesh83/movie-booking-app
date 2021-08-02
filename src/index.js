import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/header/Header';
import Home from './screens/home/Home';
import {GridList1} from './screens/home/Home';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <GridList1/>
  </React.StrictMode>,
  document.getElementById('root')
);

