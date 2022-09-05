import { useState, useEffect } from "react";
import NavBarElement from "../components/NavBarElement";
import Lista from "../components/ListaElement";


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
		</div>
	);
};

export default App;
