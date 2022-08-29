import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/blog.css';
import Listacategorias from '../components/ListaCategorias';
import ListaPost from '../components/ListaPost';

const Categoria =() => {
    const { id } = useParams()
    return (
        <>
            <div className = "Container">
                <h2 className="titulo-pagina">
                    Pet Notícias
                </h2>
            </div>
            <Listacategorias />
                
           
                <ListaPost url={`/posts?categoria=${id}`}/> 
                
        </>
    );
}

export default Categoria;