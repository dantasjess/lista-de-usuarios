import "../App.css";
import { useState, useEffect } from "react";
import TarefasElement from "../components/TarefasElement";
import { Typography } from '@mui/material';
import { useParams } from "react-router-dom";


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
            <Typography sx={{fontSize: 40}}>Tarefas</Typography>
            <TarefasElement tarefas={tarefas}/>
        </>
    )
}

export default Tarefas