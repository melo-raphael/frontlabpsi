import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { FaExpandArrowsAlt } from 'react-icons/fa';

import './styles.css';

import api from '../../Services/api';



function Drivers () {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        api.get('/funcionario')
        .then(reponse => {
            setDrivers(reponse.data);
        })
        .catch(error => {
            console.log('Erro ao buscar motoristas',error);
        });
    }, []);

    return(
        <div className="external-container">

        <div className="drivers-container">
            <header>
                {/* <img src={logo} alt="trader logo"/> */}

                <div className="header-container" > 
                    <span>Lista de Motoristas </span> 
                </div>
                
            </header>

            <h1>Motoristas disponíveis</h1>

            <ul>
                {drivers.map( (driver, index) => (
                    <li key={driver.id}>
                        <strong>NOME:</strong>
                        <p>{`${driver.nome} ${driver.sobrenome}`}</p>

                        <strong>CPF:</strong>
                        <p>{driver.cpf}</p>

                        <Link to={{pathname: `/driver/${index + 1}`, state: {driver}}} type="button">
                            <FaExpandArrowsAlt size={20} color="#a8a8b3"/>
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
        </div>

    );
}

export default Drivers