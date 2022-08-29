import React,{ useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {busca} from '../api/api';

import '../assets/css/blog.css';

const Listacategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        busca('/categorias',setCategorias)
        .catch(()=>{
            navigate('/*')
        })
    },[]);

    return (
        <ul className="lista-categorias container flex">
            {
                categorias.map(categoria => (
                    <Link key={categoria.id} to={`categoria/${categoria.id}`}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default Listacategorias;