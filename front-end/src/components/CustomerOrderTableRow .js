import React from 'react';
// import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function CustomerOrderTableRow() {
  return (

    <TableRow spacing={ 0 } sx={ { bgcolor: 'lightgray ', color: 'white' } }>
      <TableCell
        item
        xs={ 1 }
        sx={ {
          bgcolor: 'secondary.main',
          color: 'black' } }
      >
        <Box align="center">1</Box>
      </TableCell>
      <TableCell item xs={ 5 } sx={ { color: 'black' } }>
        batatinha
      </TableCell>
      <TableCell
        item
        xs={ 2 }
        sx={ { bgcolor: 'primary.main' } }
      >
        <Box align="center">7</Box>
      </TableCell>
      <TableCell item xs={ 2 } sx={ { bgcolor: 'darkblue' } }>
        <Box align="center">2.000.000.000</Box>
      </TableCell>
      <TableCell item xs={ 2 } sx={ { bgcolor: 'blue' } }>
        <Box align="center"> 7.000.000.000</Box>
      </TableCell>
    </TableRow>
  );
}
