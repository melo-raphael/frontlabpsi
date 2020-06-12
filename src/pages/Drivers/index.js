import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
// Id
// Nome
// Sobrenome
// Rg
// Cpf
// DataNascimento
// Email
// EstadoCivil
// Sexo
// UsuarioPerfil
// NumeroTelefone
// CNHNumero
// CNHValidade
// CNHCategoria
import './styles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../Services/api';



function Drivers () {
    const [drivers, setDrivers] = useState([
        {id: 1, nome: 'teste', sobrenome: 'teste', cpf: '121212121'},
        {id: 1, nome: 'teste', sobrenome: 'teste', cpf: '121212121'},
        {id: 1, nome: 'teste', sobrenome: 'teste', cpf: '121212121'},
        {id: 1, nome: 'teste', sobrenome: 'teste', cpf: '121212121'}
    ]);

    useEffect(() => {
        api.get('/funcionario')
        .then(reponse => {
            setDrivers(reponse.data.result);
            console.log('teste', drivers)
        });
    });

    return(
        <div className="drivers-container">
            <header>
                {/* <img src={logo} alt="trader logo"/> */}

                <div className="header-container" > 
                    <span>Lista de Motoristas </span> 
                </div>
                
            </header>

            <h1>Motoristas disponíveis</h1>

            <ul>
                {drivers.map( driver => (
                    <li key={driver.id}>
                        <strong>NOME:</strong>
                        <p>{`${driver.nome} ${driver.sobrenome}`}</p>

                        <strong>CPF:</strong>
                        <p>{driver.cpf}</p>

                        <Link to="vehicle/edit" type="button">
                            <FaEdit size={20} color="#a8a8b3"/>
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Drivers