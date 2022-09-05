import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/customer/Products';
import Orders from './pages/customer/Orders';
import OrderDetails from './pages/customer/OrderDetails';

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
    </Routes>
  );
}

export default App;
