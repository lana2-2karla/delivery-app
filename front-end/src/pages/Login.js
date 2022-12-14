import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Stack, TextField } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import Context from '../context/Context';

export default function Login() {
  const { setUser } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const MAGIC_6 = 6;
  const MAGIC_400 = 400;
  const [requestError, setRequestError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const finishedOrder = JSON.parse(localStorage.getItem('finishedOrder'));
    if (finishedOrder) {
      localStorage.removeItem('finishedOrder');
      navigate('../customer/products');
    }
  });

  function validateEmail() {
    if (mailRegex.test(email)) {
      return true;
    }
  }

  function validatePassword() {
    if (password.length >= MAGIC_6) {
      return true;
    }
  }

  async function submitLogin() {
    try {
      const response = await axios
        .post('http://localhost:3001/login', {
          email,
          password,
        });

      if (response.status >= MAGIC_400) return setRequestError(true);

      const decoded = jwtDecode(response.data.token);
      const userData = {
        name: decoded.name,
        email: decoded.email,
        role: decoded.role,
        token: response.data.token,
      };

      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.removeItem('cart');
      setUser(userData);
      if (userData.role === 'customer') {
        navigate('../customer/products');
      } else {
        navigate('../seller/orders');
      }
    } catch (error) {
      setRequestError(true);
    }
  }

  return (
    <Container component="main" width="100vw">
      <Stack direction="column" alignItems="center">
        <LocalBarIcon />
        <h1>Delivery P?? de Cana</h1>
        { requestError
          && <p data-testid="common_login__element-invalid-email">Dados Inv??lidos</p>}
        <TextField
          id="outlined-basic"
          label="Login"
          variant="outlined"
          inputProps={ { 'data-testid': 'common_login__input-email' } }
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          inputProps={ { 'data-testid': 'common_login__input-password' } }
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <Button
          type="submit"
          variant="contained"
          data-testid="common_login__button-login"
          disabled={ !validateEmail() || !validatePassword() }
          onClick={ async () => submitLogin() }
        >
          Login
        </Button>
        <Link to="/register">
          <Button
            type="submit"
            variant="contained"
            data-testid="common_login__button-register"
          >
            Ainda n??o tenho conta
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
