import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Button } from '@mui/material';
import moment from 'moment-timezone';

export default function TableHeader() {
  const [dataSeller, setDataSeller] = useState('');
  const [dataStatus, setDataStatus] = useState({});
  const [formatedDate, setFormatedDate] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = location.pathname;
    axios.get(`http://localhost:3001${params}`).then((res) => {
      setDataSeller(res.data.seller.name);
      setDataStatus(
        {
          orderId: res.data.id,
          orderStatus: res.data.status,
          sellerName: res.data.seller.name,
          totalPrice: res.data.totalPrice.replace('.', ','),
        },
      );
      const str = res.data.saleDate;
      const dateValues = moment(str).tz('America/Sao_Paulo').format('DD/MM/YYYY');
      setFormatedDate(dateValues);
    }).catch((error) => {
      console.log(error);
    });
  }, [setDataSeller, setDataStatus, setFormatedDate, location]);

  return (
    <Grid container spacing={ 2 }>
      <Grid
        Box
        xs={ 2 }
      >
        <Box>
          Pedido
          {' '}
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {dataStatus.orderId}
          </span>
        </Box>
      </Grid>
      <Grid
        Box
        xs={ 2 }
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        <Box>{`P. Vend: ${dataSeller}`}</Box>
      </Grid>
      <Grid
        Box
        xs={ 2 }
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        <Box>{formatedDate}</Box>
      </Grid>
      <Grid
        Box
        xs={ 2 }
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        <Box>{dataStatus.orderStatus}</Box>
      </Grid>
      <Grid
        Box
        xs={ 2 }
        data-testid="customer_order_details__element-order-total-price"
      >
        <Box>{dataStatus.totalPrice}</Box>
      </Grid>
      <Grid
        Box
        xs={ 2 }
      >
        <Button
          variant="contained"
          data-testid="customer_order_details__button-delivery-check"
          disabled={ dataStatus.orderStatus !== 'Em Trânsito' }
        >
          Marcar como Entregue
        </Button>
      </Grid>
    </Grid>
  );
}
