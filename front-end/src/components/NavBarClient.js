import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Context from '../context/Context';

function NavBarClient() {
  const { user, setUser } = useContext(Context);

  function clearUser() {
    localStorage.removeItem('user');
    setUser({});
  }

  return (
    <Grid container spacing={ 0 } sx={ { bgcolor: 'primary.main', color: 'white' } }>
      <Grid item xs={ 2 }>
        <Link to="/produtos">
          <div data-testid="customer_products__element-navbar-link-products">
            Produtos
          </div>
        </Link>
      </Grid>
      <Grid item xs={ 2 }>
        <Link to="/pedidos">
          <div data-testid="customer_products__element-navbar-link-orders">
            Meus pedidos
          </div>
        </Link>
      </Grid>
      <Grid item xs={ 5 }>
        <div>Espaço vazio</div>
      </Grid>
      <Grid item xs={ 2 } sx={ { bgcolor: 'darkblue' } }>
        <div data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </div>
      </Grid>
      <Link to="/login" onClick={ () => clearUser() }>
        <Grid item xs={ 1 } sx={ { bgcolor: 'blue' } }>
          <div data-testid="customer_products__element-navbar-link-logout">Sair</div>
        </Grid>
      </Link>
    </Grid>
  );
}

export default NavBarClient;
