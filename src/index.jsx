import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Dresses from './components/Dresses';
import Shoes from './components/Shoes';
import Accessories from './components/Accessories';

const App = () => {
  return (
    <div className="container">
      <Header title="Butik u krasule" />
      <Dresses />
      <Shoes />
      <Accessories />
      <Footer year="2022" author="Voháklo & dcera" />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
