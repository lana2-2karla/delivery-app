import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBarClient() {
  return (
    <Grid container spacing={ 0 } sx={ { bgcolor: 'primary.main', color: 'white' } }>
      <Grid item xs={ 2 }>
        <Link to="/produtos">
          <div data-testid="customer_products_element-navbar-link-products">Produtos</div>
        </Link>
      </Grid>
      <Grid item xs={ 2 }>
        <Link to="/pedidos">
          <div data-testid="customer_products_element-navbar-link-orders">
            Meus pedidos
          </div>
        </Link>
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
