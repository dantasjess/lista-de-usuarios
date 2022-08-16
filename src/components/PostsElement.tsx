
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';


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
            </ListItem>
                  </>
        ))}
    </List>
  );
}

export default PostsElement;