import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import NavBarClient from '../../components/NavBarClient';
import OrderCard from '../../components/cards/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));

      const response = await axios({
        method: 'get',
        url: 'http://localhost:3001/customer/orders',
        headers: { Authorization: token },
      });

      setOrders(response.data);
    };

    fetchOrders();
  }, [setOrders]);

  return (
    <>
      <NavBarClient />
      {orders?.map((order) => (
        <Link to={ `/customer/orders/${order.id}` } key={ order.id }>
          <OrderCard order={ order } />
        </Link>
      ))}
    </>
  );
}

export default Orders;
