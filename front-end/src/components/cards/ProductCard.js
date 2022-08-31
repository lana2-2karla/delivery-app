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
        {product.price}
      </span>
      <CardContent>
        <img src={ product.urlImage } alt="exemplo" />
      </CardContent>
      <CardActions>
        <div>{product.name}</div>
        <Button onClick={ handleClick } id="less">
          -
        </Button>
        <div>{productQuantity}</div>
        <Button onClick={ handleClick } id="more">
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
