import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home, { Left, OutlinedCard } from './screens/home/Home';
import {GridList1} from './screens/home/Home';
ReactDOM.render(
  <div>
    <Home/>
    <GridList1/>
    <div className="flex-container">
      <div className="left">
    <Left/>
    </div>
    <div className="right">
    <OutlinedCard/>
    </div>
    </div>
  </div>,
  document.getElementById('root')
);