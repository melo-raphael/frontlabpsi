import React, { useEffect, useState }from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../Services/api';

export default function List() {
    const [veiculos, setVeiculos]  = useState([]); 
    
    useEffect(() => {
        api.get('/veiculos')
            .then(response => {
                setVeiculos(response.data.result);
            });
    },[]);

    async function handleDelteVehicle (id) {
        try{
            await api.delete(`/veiculos/${id}`);
            setVeiculos(veiculos.filter(veiculo => veiculo.id !== id));
        } catch(error) {
            alert('Erro ao deletar este veículo, tente novamente');
            console.log('erro ao deletar veiculo', error);
        }
    }

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
                    <li key={veiculo.id}>
                        <strong>PLACA:</strong>
                        <p>{veiculo.placa}</p>

                        <strong>MODELO:</strong>
                        <p>{veiculo.modelo}</p>

                        <Link className="edit"to={{pathname: "/vehicle/edit", state: {veiculo}}} >
                            <FaEdit size={20} color="#a8a8b3"/>
                        </Link>
                        <button onClick={() => handleDelteVehicle(veiculo.id)} type="button">
                            <FaRegTrashAlt size={20} color="#a8a8b3"/>
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
}
