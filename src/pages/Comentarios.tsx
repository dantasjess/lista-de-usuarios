import {useState, useEffect} from 'react';
import ComentElement from "../components/ComentElement"
import { useParams } from 'react-router-dom';
import NavBarElement from '../components/NavBarElement';

const Comentarios = (props: any) => {
  let params = useParams();

  const [comments, setComments] = useState([]);
  const [enableComments, setEnableComments] = useState(true);

  const handleOpenComments = () => {
    setEnableComments(!enableComments);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`)
    .then(response => response.json())
    .then(json => setComments(json))
  })
  return (
    <>
      <NavBarElement/>
      <h1>Comentários</h1>
       <ComentElement comments={comments}/>
    </>
)
}
export default Comentarios;