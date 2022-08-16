import { useState, useEffect } from "react";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import NavBarElement from "../components/NavBarElement";
import PostsElement from "../components/PostsElement";
import ListItemButton from '@mui/material/ListItemButton';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { spacing } from "@mui/system";

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

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Minora" },
		{ id: 2, name: "Ataide" },
	]);
  	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});
	return (
		<div className="App">
		<NavBarElement/>
		<h1>Lista de usuários</h1>
      	<Lista usuarios={users}></Lista>
			<div className="card">
        {loading ? <h2>Carregando...</h2> : null}
			</div>
		</div>
	);
};

export default App;
