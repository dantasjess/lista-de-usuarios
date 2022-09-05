import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import NavBarElement from '../components/NavBarElement';
import { Typography } from '@mui/material';

const Login = (props: any) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  fetch("https://jsonplaceholder.typicode.com/users/")
    .then((response) => response.json())
    .then((json) => {setUsers(json)});

  console.log(users);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email')
    let password = data.get('password')
    
    if (props.usuarios.map((value : any) => value.email).includes(email)) {
      navigate("/");} 
    else {
      console.log('Algo deu errado')}
  };

  return (
    <>
      <NavBarElement />
      <Container>
        <Box>
          <h1>Login</h1>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" variant="standard" required fullWidth id="E-mail" label="E-mail" name="E-mail" autoComplete="E-mail" autoFocus/>
                <TextField margin="normal" variant="standard" required fullWidth name="Senha" label="Senha" type="Senha" id="Senha" autoComplete="Senha"/>
                <Button type="submit" fullWidth variant="contained" sx={{bgcolor:"blue"}}><Typography>Login</Typography></Button>
                <Button variant="text" sx={{textTransform:"none"}}>Esqueci a senha</Button>
                <Button variant="text" sx={{textTransform:"none"}}>Não tem uma conta? Cadastre-se</Button>
          </Box>
        </Box>   
      </Container>
    </>
  );
}

export default Login;