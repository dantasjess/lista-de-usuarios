import "../App.css";
import { useState, useEffect } from "react";
import TarefasElement from "../components/TarefasElement";
import { useParams } from "react-router-dom";
import NavBarElement from "../components/NavBarElement";


const Tarefas = (props: any) => {
    let params = useParams();
    
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.user_id}/todos`)
            .then((response) => response.json())
            .then((json) => {
        setTarefas(json); 
        setLoading(false)
        });
    });

	return (
        <>
            <NavBarElement/>
            <h1>Tarefas</h1>
            <TarefasElement tarefas={tarefas}/>
        </>
    )
}

export default Tarefas