import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';

function ProductCard({ imgSrc, name, price }) {
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
      <span>
        { price }
      </span>
      <CardContent>
        <img src={ imgSrc } alt="exemplo" />
      </CardContent>
      <CardActions>
        <div>{name}</div>
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

export default ProductCard;
