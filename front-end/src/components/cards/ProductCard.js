import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import Context from '../../context/Context';

function ProductCard({ product }) {
  const [productQuantity, setProductQuantity] = useState(0);
  const { setCart, setSubTotal } = useContext(Context);

  const sumTotal = (items) => {
    const subTotal = items
      .reduce((acc, cur) => (acc + Number(cur.price) * cur.quantity), 0)
      .toFixed(2)
      .replace('.', ',');

    setSubTotal(subTotal);

    return subTotal;
  };

  const toggleCartItems = (quantity) => {
    const cart = JSON.parse(localStorage.getItem('cart')) ?? [];
    let updatedCart = cart;
    const index = cart.findIndex((prod) => prod.id === product.id);

    if (index >= 0) {
      updatedCart[index].quantity = quantity;
    } else {
      updatedCart = [...updatedCart, { ...product, quantity }];
    }

    if (quantity === 0) {
      updatedCart = cart.filter((it) => it.id !== product.id);
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    sumTotal(updatedCart);
  };

  const handleCartItemChange = ({ target }) => {
    setProductQuantity(Number(target.value));
    toggleCartItems(Number(target.value));
  };
  const handleClick = ({ target }) => {
    if (target.id === 'more') {
      setProductQuantity(productQuantity + 1);
      toggleCartItems(productQuantity + 1);
    }
    if (target.id === 'less' && productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
      toggleCartItems(productQuantity - 1);
    }
  };

  return (
    <Card>
      <span data-testid={ `customer_products__element-card-price-${product.id}` }>
        {Number(product.price).toFixed(2).replace('.', ',')}
      </span>
      <CardContent>
        <img
          src={ product.urlImage }
          alt="exemplo"
          data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        />
      </CardContent>
      <CardActions>
        <div data-testid={ `customer_products__element-card-title-${product.id}` }>
          {product.name}
        </div>
        <Button
          onClick={ handleClick }
          id="less"
          data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        >
          -
        </Button>
        <input
          type="text"
          value={ productQuantity }
          onChange={ handleCartItemChange }
          data-testid={ `customer_products__input-card-quantity-${product.id}` }
        />
        <Button
          onClick={ handleClick }
          id="more"
          data-testid={ `customer_products__button-card-add-item-${product.id}` }
        >
          +
        </Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
