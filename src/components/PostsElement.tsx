import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom';

const PostsElement = (props: any) => {
  return (
    <List sx={{ width: '100%'}}>
        {props.posts.map((post: any) => (    
            <>
            <ListItem>
                <ListItemText 
                  primary={<Typography sx={{ fontSize: 20}}>{post.title}</Typography>}
                  secondary={<Typography>{post.body}</Typography>}
                />
                <ListItemButton><Link to={`/comentarios/${post.id}`}><ListItemText primary="Ver comentários" sx={{color: "black"}} /></Link></ListItemButton>
            </ListItem>
                  </>
        ))}
    </List>
  );
}

export default PostsElement;