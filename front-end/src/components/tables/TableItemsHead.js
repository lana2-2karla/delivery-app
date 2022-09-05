import React from 'react';
import { TableRow, TableCell, TableHead } from '@mui/material';

function TableItemsHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Item</TableCell>
        <TableCell align="right">Descrição</TableCell>
        <TableCell align="right">Quantidade</TableCell>
        <TableCell align="right">Valor Unitário</TableCell>
        <TableCell align="right">Sub-total</TableCell>
        <TableCell align="right">Remover Item</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default TableItemsHead;
