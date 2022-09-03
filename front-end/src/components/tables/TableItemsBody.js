import React, { useContext, useEffect, useState } from 'react';
import { TableRow, TableCell, TableBody, Button } from '@mui/material';
import Context from '../../context/Context';

function TableItemsBody() {
  const [cartItems, setCartItems] = useState([]);
  const { setSubTotal, setCart } = useContext(Context);

  useEffect(() => {
    const itemsList = JSON.parse(localStorage.getItem('cart')) ?? [];
    setCartItems(itemsList);
  }, []);

  const sumTotal = (items) => {
    const subTotal = items
      .reduce((acc, cur) => (acc + Number(cur.price) * cur.quantity), 0)
      .toFixed(2)
      .replace('.', ',');

    setSubTotal(subTotal);
  };
  const handleRemoveItem = (e, productId) => {
    const updatedItems = cartItems.filter((it) => it.id !== productId);
    setCartItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    setCart(updatedItems);
    sumTotal(updatedItems);
  };

  const populateTable = () => (
    cartItems.map((item, index) => (
      <TableRow
        key={ item.id }
        sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
      >
        <TableCell
          data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        >
          { index + 1 }
        </TableCell>
        <TableCell
          align="right"
          component="th"
          scope="row"
          data-testid={ `customer_checkout__element-order-table-name-${index}` }
        >
          {item.name}
        </TableCell>
        <TableCell
          align="right"
          data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        >
          {item.quantity}
        </TableCell>
        <TableCell
          align="right"
          data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        >
          {item.price.replace('.', ',')}
        </TableCell>
        <TableCell
          align="right"
          data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        >
          {(Number(item.price) * item.quantity).toFixed(2).replace('.', ',') }
        </TableCell>
        <TableCell
          align="right"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        >
          <Button
            variant="outlined"
            color="error"
            onClick={ (e) => handleRemoveItem(e, item.id) }
          >
            Remover
          </Button>
        </TableCell>
      </TableRow>
    ))
  );

  return (
    <TableBody>
      { populateTable() }
    </TableBody>
  );
}

export default TableItemsBody;
