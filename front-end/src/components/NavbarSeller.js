import React from 'react';
import { Grid } from '@mui/material';

function NavBarSeller() {
  return (
    <Grid container spacing={ 0 } sx={ { bgcolor: 'primary.main', color: 'white' } }>
      <Grid item xs={ 2 }>
        <div>Pedidos</div>
      </Grid>
      <Grid item xs={ 7 }>
        <div>Espaço vazio</div>
      </Grid>
      <Grid item xs={ 2 } sx={ { bgcolor: 'darkblue' } }>
        <div>Username</div>
      </Grid>
      <Grid item xs={ 1 } sx={ { bgcolor: 'blue' } }>
        <div>Sair</div>
      </Grid>
    </Grid>
  );
}

export default NavBarSeller;
