import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const TarefasElement = (props:any) => {
    return (
        <FormGroup>
            {props.tarefas.map((tarefa: any) => 
            (<FormControlLabel control={<Checkbox defaultChecked={tarefa.completed} />}
             label={tarefa.title} />))}
        </FormGroup>
    );
}

export default TarefasElement;