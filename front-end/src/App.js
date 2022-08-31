import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/customer/Products';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={ <Navigate to="/login" replace /> }
      />
      <Route path="/login" element={ <Login /> } />
      <Route path="/customer" element={ <Products /> } />
    </Routes>
  );
}

export default App;
