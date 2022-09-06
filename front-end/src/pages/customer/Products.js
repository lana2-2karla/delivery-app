import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/Navbar';
import ProductCard from '../../components/cards/ProductCard';
import Context from '../../context/Context';

function Products() {
  const [products, setProducts] = useState([]);
  const { cart } = useContext(Context);
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios
        .get('http://localhost:3001/customer/products');

      setProducts(response.data);
    };

    fetchProducts();
    setIsDisabled(cart.length === 0);
  }, [setProducts, setIsDisabled, cart]);

  const sumTotal = () => {
    const subTotal = cart
      .reduce((acc, cur) => (acc + Number(cur.price) * cur.quantity), 0)
      .toFixed(2)
      .replace('.', ',');

    return subTotal;
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    navigate('/customer/checkout');
  };

  return (
    <section>
      <NavBar />
      <Button
        variant="contained"
        color="success"
        data-testid="customer_products__button-cart"
        disabled={ isDisabled }
        onClick={ handleBtnClick }
      >
        Ver Carrinho:
        {'R$ '}
        <div
          data-testid="customer_products__checkout-bottom-value"
        >
          { sumTotal() }
        </div>
      </Button>
      {products?.map((product) => <ProductCard key={ product.id } product={ product } />)}
    </section>
  );
}

export default Products;
