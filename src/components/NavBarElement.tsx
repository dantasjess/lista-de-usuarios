import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBarElement = (props: any) => {
    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{bgcolor:"blue"}}>
          <Toolbar>
          <Button href='/' disableElevation sx={{bgcolor:"blue"}}><Typography sx={{color:"white"}}>Página Inicial</Typography></Button>
            <Button href='/login' disableElevation sx={{color:"white"}}><Typography sx={{color:"white"}}>Login</Typography></Button>
            <Button href='/Cadastro' disableElevation sx={{color:"white"}}><Typography sx={{color:"white"}}>Cadastro</Typography></Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default NavBarElement;