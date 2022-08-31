import PropTypes from 'prop-types';
import React from 'react';
import { Box, Card, CardContent } from '@mui/material';
import { Stack } from '@mui/system';

function OrderCard({ order }) {
  return (
    <Card>
      <Stack direction="row" spacing={ 0 } sx={ { bgcolor: 'grey', color: 'black' } }>
        <CardContent sx={ { bgcolor: 'white', color: 'black' } }>
          Pedido:
          <span>{order.id}</span>
        </CardContent>
        <CardContent sx={ { bgcolor: 'yellow', color: 'black' } }>
          <span>{order.status}</span>
        </CardContent>
        <CardContent>
          <Box
            sx={ { bgcolor: 'white', color: 'black' } }
            data-testid={ `customer_products__element-order-date-${order.id}` }
          >
            {order.saleDate}
          </Box>
          <Box sx={ { bgcolor: 'white', color: 'black' } }>{order.totalPrice}</Box>
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
