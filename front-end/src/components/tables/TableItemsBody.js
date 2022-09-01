import React from 'react';
import { TableRow, TableCell, TableBody, Button } from '@mui/material';

function TableItemsBody(props) {
  const { items } = props;

  return (
    <TableBody>
      {items.map((item, index) => (
        <TableRow
          key={ item.id }
          sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
        >
          <TableCell>{ index + 1 }</TableCell>
          <TableCell
            align="right"
            component="th"
            scope="row"
            data-testid={``}
          >
            {item.name}
          </TableCell>
          <TableCell align="right">{item.quantity}</TableCell>
          <TableCell align="right">{item.price}</TableCell>
          <TableCell align="right">{Number(item.price) * item.quantity }</TableCell>
          <TableCell align="right">
            <Button variant="outlined" color="error">
              Remover
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TableItemsBody;
