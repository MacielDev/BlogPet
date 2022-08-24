import React from 'react';


import imagem from '../assets/img/doguito404.svg';
import '../assets/css/404.css';

const Pagina404 = () =>{
    return(
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={imagem} alt="Imagem Pagina 404" />
            <p className="naoencontrado-texto">Ops, a página não existe!!!!</p>
        </main>
    )
}

export default Pagina404;
