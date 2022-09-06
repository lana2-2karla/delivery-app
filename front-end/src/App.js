import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/customer/Products';
import Orders from './pages/customer/Orders';
import OrderDetails from './pages/customer/OrderDetails';
import Checkout from './pages/customer/Checkout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={ <Navigate to="/login" replace /> }
      />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
