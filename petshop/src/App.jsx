import React from 'react';
import './assets/css/base/base.css';
import { Route, Routes } from 'react-router-dom';

import Cabecalho  from './components/Cabecalho';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Post from './components/Post';
import Categoria from './paginas/Categoria';


function App() {
  const rotas = () => {
    return (
      <>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/categoria" element={<Categoria/>}>
          <Route path="categoria/:id" element={<Route/>} />
        </Route>
        <Route path="/posts/:id" element={<Post/>} />
        <Route path="/*" element={<Pagina404/>} />
      </Routes>
      </>
    )
  }
  return (
  <>
  {rotas()}
  </>
  )
}

export default App;
