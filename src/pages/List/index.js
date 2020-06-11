import React, { useEffect, useState }from 'react';
import api from '../../Services/api';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';
export default function List() {
    const [veiculos, setVeiculos]  = useState([]); 
    useEffect(() => {
        api.get('/veiculos')
            .then(response => {
                setVeiculos(response.data.result);
            });
    }, []);

    return (
        <div className="dashboard-container">
            <header>
                {/* <img src={logo} alt="trader logo"/> */}

                <div className="header-container" > 
                    <span>Lista de Veículos </span> 
                </div>
                
            </header>

            <h1>Veiculos disponíveis</h1>

            <ul>
                {veiculos.map( veiculo => (
                    <li>
                        <strong>PLACA:</strong>
                        <p>{veiculo.placa}</p>

                        <strong>MODELO:</strong>
                        <p>{veiculo.modelo}</p>

                        <Link to="vehicle/edit" type="button">
                            <FaEdit size={20} color="#a8a8b3"/>
                        </Link>
                        <button type="button">
                            <FaRegTrashAlt size={20} color="#a8a8b3"/>
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
}
