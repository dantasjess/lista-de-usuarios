import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import Tarefas from './pages/Tarefas'
import Posts from './pages/Posts'
import Comentarios from './pages/Comentarios'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { Link, Typography } from '@mui/material';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="tarefas/:user_id" element={<Tarefas />} />
        <Route path="posts/:user_id" element={<Posts />} />
        <Route path= "comentarios/:post_id" element={<Comentarios/>} />
        <Route path="login/" element={<Login />} />
        <Route path="cadastro/" element={<Cadastro />} />
        <Route
          path="*"
          element={
            <>
              <Typography>Erro</Typography>
              <Link href='/'>Página inicial</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)