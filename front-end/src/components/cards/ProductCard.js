import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';

function ProductCard({ product }) {
  const [productQuantity, setProductQuantity] = useState(0);

  const handleClick = ({ target }) => {
    if (target.id === 'more') {
      setProductQuantity(productQuantity + 1);
    }
    if (target.id === 'less') {
      setProductQuantity(productQuantity - 1);
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
          onChange={ (e) => setProductQuantity(Number(e.target.value)) }
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
