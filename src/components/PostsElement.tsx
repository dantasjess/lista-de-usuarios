
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material';
import Typography from '@mui/material/Typography';


const PostsElement = (props: any) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.posts.map((post: any) => (    
            <>
            <ListItem>
                <ListItemText 
                  primary={ <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="text.primary">{post.title}</Typography>}
                  secondary={<React.Fragment>{post.body}</React.Fragment>}
                />
            </ListItem>
                  </>
        ))}
    </List>
  );
}

export default PostsElement;