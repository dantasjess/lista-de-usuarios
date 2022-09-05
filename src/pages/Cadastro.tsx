import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBarElement from '../components/NavBarElement';

const Cadastro = (props: any) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
    <NavBarElement />
      <Container>
        <Box>
          <h1>Cadastro</h1>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item sm={6}>
                <TextField variant="standard" name="Nome" required fullWidth id="Nome" label="Nome" autoFocus/>
              </Grid>
              <Grid item sm={6}>
                <TextField variant="standard" required fullWidth id="Sobrenome" label="Sobrenome" name="Sobrenome"/>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="standard" required fullWidth id="Email" label="Endereço de e-mail" name="email"/>
              </Grid>
              <Grid item xs={12}>
                <TextField variant="standard" required fullWidth name="Senha" label="Senha" type="password" id="Senha"/>
              </Grid>
            </Grid>
            <br />
            <Button type="submit" fullWidth variant="contained" sx={{bgcolor:"blue"}}>Cadastrar-se</Button>
            <Button variant="text" sx={{textTransform:"none"}}>Já tem uma conta? Login</Button>
          </Box>
        </Box>
      </Container>
      </>
  );
}

export default Cadastro;