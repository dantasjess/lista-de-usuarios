import "../App.css";
import { useState, useEffect } from "react";
import PostListComponent from "../components/PostsElement";
import NavBarElment from "../components/NavBarElement";
import { Typography } from '@mui/material';
import { useParams } from "react-router-dom";


const PostsElement = (props: any) => {
    let params = useParams();
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.user_id}/posts`)
            .then((response) => response.json())
            .then((json) => {
        setPosts(json); 
        setLoading(false)
        });
    });

	return (
        <>
            <NavBarElment user_id={params.user_id} current_page="posts"/>
            <Typography variant='h3'>Posts</Typography>
            {loading ? <Typography >Carregando...</Typography> : null}
            <PostsElement posts={posts}/>
        </>
    )
}

export default PostsElement