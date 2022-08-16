import "../App.css";
import {useState, useEffect} from "react";
import PostsElement from "../components/PostsElement";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";


const Posts = (props: any) => {
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
            <Typography sx={{fontSize: 40}}>Posts</Typography>
            <PostsElement posts={posts}/>
        </>
    )
}

export default Posts