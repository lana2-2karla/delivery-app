import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBarClient from '../../components/NavBarClient';
import OrderCard from '../../components/cards/OrderCard';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios
        .get('http://localhost:3001/customer/orders');

      setOrders(response.data);
    };

    fetchOrders();
  }, [setOrders]);

  return (
    <>
      <NavBarClient />
      {orders?.map((order) => <OrderCard key={ order.id } order={ order } />)}
    </>
  );
}

export default Orders;
