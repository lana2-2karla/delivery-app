import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBarClient from '../../components/NavBarClient';
import ProductCard from '../../components/cards/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get('http://localhost:3001/customer/products');

      setProducts(response.data);
    };

    fetchProducts();
  }, [setProducts]);

  return (
    <>
      <NavBarClient />
      {products?.map((product) => <ProductCard key={ product.id } product={ product } />)}
    </>
  );
}

export default Products;
