import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const TarefasElement = (props:any) => {
    return (
        <FormGroup>
            {props.tarefas.map((tarefa: any) => (    
                <FormControlLabel control={
                    <Checkbox checked={tarefa.completed} inputProps={{ 'aria-label': 'controlled' }} />
                } label={tarefa.title} />
            ))}
        </FormGroup>
    );
}

export default TarefasElement;