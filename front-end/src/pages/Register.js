import { Button, Container, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [requestError, setRequestError] = useState(false);

  const navigate = useNavigate();

  const MAGIC_400 = 400;
  const MAGIC_12 = 12;
  const MAGIC_6 = 6;
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateUsername() {
    if (name.length >= MAGIC_12) {
      return true;
    }
  }

  function validatePassword() {
    if (password.length >= MAGIC_6) {
      return true;
    }
  }

  function validateEmail() {
    if (mailRegex.test(email)) {
      return true;
    }
  }

  async function submitRegister() {
    console.log('aaaa');
    try {
      const response = await axios
        .post('http://localhost:3001/register', {
          name,
          email,
          password,
          role: 'customer',
        });

      console.log('bbb');
      if (response.status >= MAGIC_400) return setRequestError(true);
      navigate('../customer/products', { replace: true });
    } catch (error) {
      console.log(error.message);

      setRequestError(true);
    }
  }

  return (
    <Container component="main" width="100vw">
      <Stack component="form" direction="column" alignItems="center">
        {
          requestError
          && (
            <p data-testid="common_register__element-invalid_register">
              Dados Inválidos
            </p>
          )
        }
        <TextField
          label="Nome"
          type="text"
          variant="outlined"
          value={ name }
          inputProps={ { 'data-testid': 'common_register__input-name' } }
          onChange={ (e) => setUsername(e.target.value) }
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={ email }
          inputProps={ { 'data-testid': 'common_register__input-email' } }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          value={ password }
          inputProps={ { 'data-testid': 'common_register__input-password' } }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <Button
          variant="contained"
          data-testid="common_register__button-register"
          onClick={ () => submitRegister() }
          disabled={ !validateUsername() || !validatePassword() || !validateEmail() }
        >
          CADASTRAR
        </Button>
      </Stack>
    </Container>
  );
}
