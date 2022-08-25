import { Button, Container, Stack, TextField } from '@mui/material';
import React from 'react';

export default function Login() {
  return (
    <Container component="main" width="100vw">
      <Stack component="form" direction="column" alignItems="center">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">
          Xabalu
        </Button>
      </Stack>
    </Container>
  );
}
