import { Button, Container, Stack, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <Container component="main" width="100vw">
      <Stack component="form" direction="column" alignItems="center">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Link to="/register">
          <Button variant="contained">
            Ainda não tenho conta
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
