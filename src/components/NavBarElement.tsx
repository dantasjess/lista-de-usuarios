import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const NavBarElement = (props: any) => {
    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" sx={{bgcolor:"gray"}}>
          <Toolbar>
            <Button sx={{color:"white", flexGrow: 1}}>Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  export default NavBarElement;