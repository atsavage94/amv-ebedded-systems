import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  App,
  Footer,
} from './components'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,

  document.getElementById('root')
);