import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCardSeller from '../../components/cards/OrderCardSeller';
import NavBar from '../../components/Navbar';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async (token) => {
      const response = await axios
        .get('http://localhost:3001/seller/orders', { headers: { Authorization: token } });
      console.log('response', response.data);
      setOrders(response.data);
    };

    const { token } = JSON.parse(localStorage.getItem('user'));
    fetchOrders(token);
  }, [setOrders]);

  return (
    <>
      <NavBar />
      {orders?.map((order) => <OrderCardSeller key={ order.id } order={ order } />)}
    </>
  );
}

export default Orders;
