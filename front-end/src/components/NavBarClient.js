import React from 'react';
import { Grid } from '@mui/material';

function NavBarClient() {
  return (
    <Grid container spacing={ 0 } sx={ { bgcolor: 'primary.main', color: 'white' } }>
      <Grid item xs={ 2 }>
        <div data-testid="customer_products__element-navbar-link-products">Produtos</div>
      </Grid>
      <Grid item xs={ 2 }>
        <div>Meus pedidos</div>
      </Grid>
      <Grid item xs={ 5 }>
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

export default NavBarClient;
