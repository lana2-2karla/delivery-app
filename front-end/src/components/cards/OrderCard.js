import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';

function OrderCard({ number, status, price, date }) {
  return (
    <Card>
      <Grid container spacing={ 0 } sx={ { bgcolor: 'grey', color: 'black' } }>
        <CardContent item xs={ 1 } sx={ { bgcolor: 'white', color: 'black' } }>
          Pedido:
          <span>{number}</span>
        </CardContent>
        <CardContent item xs={ 1 } sx={ { bgcolor: 'yellow', color: 'black' } }>
          <span>{status}</span>
        </CardContent>
        <CardContent item xs={ 1 }>
          <div sx={ { bgcolor: 'white', color: 'black' } }>{date}</div>
          <div sx={ { bgcolor: 'white', color: 'black' } }>{price}</div>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default OrderCard;
