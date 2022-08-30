import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';

function ProductCard() {
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
        <img src="https://apoioentrega.vteximg.com.br/arquivos/ids/495281/_0.jpg?v=637723470148200000" alt="exemplo" />
      </CardContent>
      <CardActions>
        <div>Cerveja tal</div>
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
