import React, { useState } from 'react';
import { Button, Container, Stack, TextField } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  validateEmailPassword = () => {
    // referência regex: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
    const { email, password } = useState;
    const regex = /\S+@\S+\.\S+/;
    const regexEmail = regex.test(email);
    const NUMBER_SIX = 6;
    if (password.length >= NUMBER_SIX && regexEmail) return false;
    return true;
  };

  return (
    <Container component="main" width="100vw">
      <Stack direction="column" alignItems="center">
        <LocalBarIcon />
        <h1>Delivery Pé de Cana</h1>
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
          disabled={ validateEmailPassword() }
        >
          Login
        </Button>
        <Button
          type="submit"
          variant="contained"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </Button>
      </Stack>
    </Container>
  );
}
