import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export default function CustomerOrderTableRow() {
  return (

    <Grid container spacing={ 0 } sx={ { bgcolor: 'lightgray ', color: 'white' } }>
      <Grid
        item
        xs={ 1 }
        sx={ {
          bgcolor: 'secondary.main',
          color: 'black' } }
      >
        <Box align="center">1</Box>
      </Grid>
      <Grid item xs={ 5 } sx={ { color: 'black' } }>
        batatinha
      </Grid>
      <Grid
        item
        xs={ 2 }
        sx={ { bgcolor: 'primary.main' } }
      >
        <Box align="center">7</Box>
      </Grid>
      <Grid item xs={ 2 } sx={ { bgcolor: 'darkblue' } }>
        <Box align="center">2.000.000.000</Box>
      </Grid>
      <Grid item xs={ 2 } sx={ { bgcolor: 'blue' } }>
        <Box align="center"> 7.000.000.000</Box>
      </Grid>
    </Grid>
  );
}
