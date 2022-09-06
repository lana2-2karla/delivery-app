import PropTypes from 'prop-types';
import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { Stack } from '@mui/system';

function OrderCardSeller({ order }) {
  console.log('order no card', order);
  return (
    <Card>
      <Stack direction="row" spacing={ 0 } sx={ { bgcolor: 'grey', color: 'black' } }>
        <CardContent sx={ { bgcolor: 'white', color: 'black' } }>
          Pedido:
          <Box data-testid={ `seller_orders__element-order-id-${order.id}` }>
            {order.id}
          </Box>
        </CardContent>
        <CardContent sx={ { bgcolor: 'yellow', color: 'black' } }>
          <Box data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
            {order.status}
          </Box>
        </CardContent>
        <CardContent>
          <Box
            sx={ { bgcolor: 'white', color: 'black' } }
            data-testid={ `seller_orders__element-order-date-${order.id}` }
          >
            {order.saleDate}
          </Box>
          <Box
            sx={ { bgcolor: 'white', color: 'black' } }
            data-testid={ `seller_orders__element-card-price-${order.id}` }
          >
            {order.totalPrice}
          </Box>
          <Box
            sx={ { bgcolor: 'white', color: 'black' } }
            data-testid={ `seller_orders__element-card-address-${order.id}` }
          >
            {order.deliveryAddress}
          </Box>
        </CardContent>
      </Stack>
    </Card>
  );
}

OrderCardSeller.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCardSeller;
