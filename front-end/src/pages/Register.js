import { Button, Container, Stack, TextField } from '@mui/material';
import { React, useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const MAGIC_12 = 12;
  const MAGIC_6 = 6;
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateUsername() {
    if (username.length >= MAGIC_12) {
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

  return (
    <Container component="main" width="100vw">
      <Stack component="form" direction="column" alignItems="center">
        <TextField
          data-test-id="common_register__input-name"
          label="Nome"
          type="text"
          variant="outlined"
          value={ username }
          onChange={ (e) => setUsername(e.target.value) }
        />
        <TextField
          data-test-id="common_register__input-email"
          label="Email"
          variant="outlined"
          type="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <TextField
          data-test-id="common_register__input-password"
          label="Senha"
          variant="outlined"
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <Button
          variant="contained"
          disabled={ !validateUsername() || !validatePassword() || !validateEmail() }
        >
          CADASTRAR
        </Button>
      </Stack>
    </Container>
  );
}
