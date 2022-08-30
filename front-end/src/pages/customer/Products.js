import React from 'react';
import NavBarClient from '../../components/NavBarClient';
import OrderCard from '../../components/cards/OrderCard';
import ProductCard from '../../components/cards/ProductCard';

function Products() {
  return (
    <>
      <NavBarClient />
      <OrderCard />
      <ProductCard />
    </>
  );
}

export default Products;
