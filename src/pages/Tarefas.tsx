import "../App.css";
import { useState, useEffect } from "react";
import Tarefas from "../components/TarefasElement";
import NavBarElement from "../components/NavBarElement";
import { Typography } from '@mui/material';
import { useParams } from "react-router-dom";


const TarefasElement = (props: any) => {
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
            <NavBarElement user_id={params.user_id} current_page="tarefas"/>
            <Typography variant='h3' sx={{ fontFamily: 'Comfortaa', color: '#EC7E31' }}>Tarefas</Typography>
            {loading ? <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 25, color: '#EC7E31' }}>Carregando...</Typography> : null}
            <TarefasElement tasks={tarefas}/>
        </>
    )
}

export default TarefasElement