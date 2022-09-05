import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';


const Lista = (props: any) => {
    return (
      <List sx={{ width: '100%', maxWidth: 720}}>
        {props.usuarios.map((value:any) => (
          <ListItem>
            <ListItemText primary={`${value.name}`} /> 
            <ListItemButton><Link to={`/posts/${value.id}`}><ListItemText primary="Ver posts" sx={{color: "black"}} /></Link></ListItemButton>
            <ListItemButton><Link to={`/tarefas/${value.id}`}><ListItemText primary="Ver tarefas" sx={{color: "black"}} /></Link></ListItemButton>
          </ListItem>	
        ))}
      </List>
    );
  }

  export default Lista;