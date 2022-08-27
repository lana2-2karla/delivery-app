import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/customer/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/customer" element={ <Products /> } />
    </Routes>
  );
}

export default App;
