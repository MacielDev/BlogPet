import React from 'react'
import Listacategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'



const Home = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <Listacategorias />
      <ListaPost url={'/posts'}/>

    </main>
  )
}

export default Home
