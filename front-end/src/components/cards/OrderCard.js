import PropTypes from 'prop-types';
import React from 'react';
import { Box, Card, CardContent, Grid } from '@mui/material';

function OrderCard({ order }) {
  return (
    <Card>
      <Grid container spacing={ 0 } sx={ { bgcolor: 'grey', color: 'black' } }>
        <CardContent item xs={ 1 } sx={ { bgcolor: 'white', color: 'black' } }>
          Pedido:
          <span>{order.id}</span>
        </CardContent>
        <CardContent item xs={ 1 } sx={ { bgcolor: 'yellow', color: 'black' } }>
          <span>{order.status}</span>
        </CardContent>
        <CardContent item xs={ 1 }>
          <Box
            sx={ { bgcolor: 'white', color: 'black' } }
            data-testid={ `customer_products__element-order-date-${order.id}` }
          >
            {order.saleDate}
          </Box>
          <Box sx={ { bgcolor: 'white', color: 'black' } }>{order.totalPrice}</Box>
        </CardContent>
      </Grid>
    </Card>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
