import PropTypes from 'prop-types';
import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { Stack } from '@mui/system';

function OrderCard({ order }) {
  const MAGIC_3 = 3;

  return (
    <Card>
      <Stack direction="row" spacing={ 0 } sx={ { bgcolor: 'grey', color: 'black' } }>
        <CardContent sx={ { bgcolor: 'white', color: 'black' } }>
          Pedido
          {' '}
          <span data-testid={ `customer_orders__element-order-id-${order.id}` }>
            {order.id}
          </span>
        </CardContent>
        <CardContent sx={ { bgcolor: 'yellow', color: 'black' } }>
          <span data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
            {order.status}
          </span>
        </CardContent>
        <CardContent>
          <Box
            sx={ { bgcolor: 'white', color: 'black' } }
            data-testid={ `customer_orders__element-order-date-${order.id}` }
          >
            {order.saleDate.split(/-|T/).splice(0, MAGIC_3).reverse().join('/')}
          </Box>
          <Box
            sx={ { bgcolor: 'white', color: 'black' } }
            data-testid={ `customer_orders__element-card-price-${order.id}` }
          >
            {order.totalPrice.replace('.', ',')}
          </Box>
        </CardContent>
      </Stack>
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
