import React, { useEffect, useState } from 'react';
// import { Grid } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import axios from 'axios';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { TableBody } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import { useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import TableRow from '@mui/material/TableRow';
import NavBar from '../../components/Navbar';
import TableTitle from '../../components/customerOrderTableTitle';
import TableHeader from '../../components/customerOrderTableHeader';

export default function OrderDetails() {
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = location.pathname;
    axios.get(`http://localhost:3001${params}`).then((res) => {
      setProducts(res.data.products);
    }).catch((error) => {
      console.log(error);
    });
  }, [setProducts, location]);

  // {data-testid=`customer_order_details__element-order-table-name-${ product.name}`}

  return (
    <>
      <NavBar />
      <h4>Detalhe do pedido</h4>
      <TableHeader />
      <TableContainer component={ Paper }>
        <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
          <TableHead>
            <TableTitle />
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow
                spacing={ 0 }
                sx={ { bgcolor: 'lightgray ', color: 'white' } }
                key={ product.id }
              >
                <TableCell
                  sx={ {
                    bgcolor: 'secondary.main',
                    color: 'black' } }
                >
                  <Box align="center">{index}</Box>
                </TableCell>
                <TableCell sx={ { color: 'black' } }>
                  { product.name }
                </TableCell>
                <TableCell
                  sx={ { bgcolor: 'primary.main' } }
                >
                  <Box align="center">{product.SaleProduct.quantity}</Box>
                </TableCell>
                <TableCell sx={ { bgcolor: 'darkblue' } }>
                  <Box align="center">{product.price}</Box>
                </TableCell>
                <TableCell sx={ { bgcolor: 'blue' } }>
                  <Box align="center">{product.SaleProduct.quantity * product.price}</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
