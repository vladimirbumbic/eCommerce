import React from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartContainer from './components/CartContainer';
import { AppProvider } from './context/Context';
import './sass/all.scss';

function App() {
  return (
    <div>
      <AppProvider>
        <Navbar />
        <Products />
        <CartContainer />
      </AppProvider>
    </div>
  );
}

export default App;
