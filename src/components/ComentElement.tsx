import { ListItem, ListItemText } from "@mui/material";
import { List, Typography } from "@mui/material";


const ComentElement = (props: any) => {
    return (    
            <List sx={{ width: '100%'}}>
                {props.comments.map((comment : any) => (
                    <>
                    <ListItem>
                        <ListItemText 
                            primary={<Typography sx={{ fontSize: 20}}> {comment.name}</Typography>}
                            secondary={<Typography>{comment.body}</Typography>}
                        />
                    </ListItem>
                    </>
                ))}
            </List>
      );
}

export default ComentElement;