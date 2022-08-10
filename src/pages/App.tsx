import { useState, useEffect } from "react";
import "../App.css";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import NavBarElement from "../components/NavBarElement";
import PostsElement from "../components/PostsElement";

const Lista = (props: any) => {
  return (
    <List sx={{ width: '100%', maxWidth: 720, bgcolor: 'background.paper'}}>
      {props.usuarios.map((value:any) => (
        <ListItem>
          <ListItemText primary={`${value.name}`} /> <br/>
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
				{/* <ul>
					{users.map((user) => (<li key={user.id}>{user.name}</li>
					))}
				</ul> */}
			</div>
		</div>
	);
};

export default App;
