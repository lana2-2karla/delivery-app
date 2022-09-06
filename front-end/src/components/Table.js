import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable() {
  //   async function userEffect() {
  //     try {
  //       const response = await axios
  //         .post('http://localhost:3001/login', {
  //           email,
  //           password,
  //         });

  //       if (response.status >= MAGIC_400) return setRequestError(true);
  //       navigate('../customer/products', { replace: true });
  //     } catch (error) {
  //       setRequestError(true);
  //     }
  //   }

  return (
    <TableContainer component={ Paper }>
      <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Descrição</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Valor Unitário</TableCell>
            <TableCell align="right">Sub-Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={ row.name }
              sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
