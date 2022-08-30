import React from 'react';
import { Card, CardContent, Grid } from '@mui/material';

function OrderCard() {
  return (
    <Card>
      <Grid container spacing={ 0 } sx={ { bgcolor: 'grey', color: 'black' } }>
        <CardContent item xs={ 1 } sx={ { bgcolor: 'white', color: 'black' } }>
          Pedido:
          <span>00001</span>
        </CardContent>
        <CardContent item xs={ 1 } sx={ { bgcolor: 'yellow', color: 'black' } }>
          <span>PENDENTE</span>
        </CardContent>
        <CardContent item xs={ 1 }>
          <div sx={ { bgcolor: 'white', color: 'black' } }>11/11/11</div>
          <div sx={ { bgcolor: 'white', color: 'black' } }>R$ 3,90</div>
        </CardContent>
      </Grid>
    </Card>
  );
}

export default OrderCard;
