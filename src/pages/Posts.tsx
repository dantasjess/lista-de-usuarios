import "../App.css";
import {useState, useEffect} from "react";
import PostsElement from "../components/PostsElement";
import {useParams} from "react-router-dom";
import NavBarElement from "../components/NavBarElement";

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
        <NavBarElement/>
        <h1>Posts</h1>
        <PostsElement posts={posts}/>
        </>
    )
}

export default Posts