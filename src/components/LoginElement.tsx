import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const LoginElement = (props: any) => {
    <Container>
        <Box>
          <h1>Login</h1>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" required fullWidth name="password" label="Senha" type="password" id="password" autoComplete="current-password"/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar de minhas credenciais"
            />
            <br />
            <br />
            <Button type="submit" fullWidth variant="contained">Login</Button>
            <Button variant="text">Esqueci a senha</Button>
            <Button variant="text">Não tem uma conta? Cadastre-se</Button>
          </Box>
        </Box>
        
      </Container>
}
export default LoginElement;