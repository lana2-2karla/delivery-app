import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableContainer,
  TableHead } from '@mui/material';
import NavBarClient from '../../components/NavBarClient';
import TableItemsHead from '../../components/tables/TableItemsHead';
import TableItemsBody from '../../components/tables/TableItemsBody';

function Checkout() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productList = [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: '2.20',
        urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
        quantity: 2,
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: '7.50',
        urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
        quantity: 4,
      },
    ];
    setProducts(productList);
  }, []);

  return (
    <section>
      <NavBarClient />
      <div>
        <h2>Finalizar Produto</h2>
        <TableContainer>
          <Table sx={ { minWidth: 650 } } aria-label="simple table">
            <TableItemsHead />
            <TableItemsBody items={ products } />
          </Table>
        </TableContainer>
      </div>
    </section>
  );
}

export default Checkout;
