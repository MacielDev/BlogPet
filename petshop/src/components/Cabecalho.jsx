import React from 'react';
import imagem from '../assets/img/doguito.svg';

import '../assets/css/componentes/cabecalho.css';
import { Link } from 'react-router-dom';

const Cabecalho = () => {
    return (
        <header className="cabecalho container">
            <div className="menu-hamburger">
                <span className="menu-hamburger__icone">

                </span>
            </div>
            <div className="cabecalho-container">
              <Link to="/" className="flex flex--centro">
                <img className="cabecalho__logo" src={imagem} alt="logo doguito" />
                <h1 className="cabecalho__titulo">PetShop</h1>
              </Link>
            </div>
            <nav className="menu-cabecalho">
               <ul className="menu-itens">
                <li>
                    <Link className="menu-item menu-item--entrar" to="#">Entrar</Link>
                </li>
                <li>
                    <Link className="menu-item" to="#">Produtos</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/">Blog</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/sobre">Sobre</Link>
                </li>
               </ul>
            </nav>
            <div className="menu-cabecalho-background"></div>
        </header>
    )
}

export default Cabecalho;