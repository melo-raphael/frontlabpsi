import React from 'react';

import './styles.css';

import profilePic from '../../assets/profile-pic.jpg';


function DriverDeatails (props) {
    const { driver } = props.location.state;
    

    return(
        <div className="dirver-detail-container">
            <div className="profile-area">
                <div className="detail-area">
                    <div className="profile-header">
                        <img src={profilePic} alt="foto de perfil"/>
                        <div>
                            <span>{`${driver.nome} ${driver.sobrenome}`}</span>
                            <span>Sexo: {driver.sexo}</span>
                        </div>
                        
                        <span className="user-type">{driver.usuarioPerfil}</span>
                    </div>

                    <div className="divider"></div>

                    <div className="driver-full-details">
                        <h3> Dados do funcionário </h3>
                        <ul>
                            <li>
                                <div className="content">
                                    <span> CPF:</span>
                                    <span className="value"> {driver.cpf}</span>
                                </div>
                                 <div className="content">
                                     <span> RG:</span>
                                     <span className="value">{driver.rg}</span>
                                </div>
                                 <div className="content">
                                    <span>Estado civil:</span>
                                    <span className="value">{driver.estadoCivil}</span>
                                </div>
                            </li>
                            <li>
                            <div className="content">
                                    <span> Email:</span>
                                    <span className="value">{driver.email}</span>
                                </div> 
                                <div className="content">
                                    <span>Data de nascimento:</span>
                                    <span className="value">{driver.dataNascimento}</span>
                                </div>
                                <div className="content">
                                    <span>Telefone:</span>
                                    <span className="value">{driver.numeroTelefone}</span>
                                </div>
                                
                                
                            </li>
                            <li>
                                <div className="content">
                                    <span>Numero CNH:</span>
                                    <span className="value">{driver.motorista.cnh.numero}</span>
                                </div>
                                <div className="content">
                                    <span> Tipo CNH:</span>
                                    <span className="value">{driver.motorista.cnh.categoria}</span>
                                </div>
                                <div className="content">
                                    <span>Vencimento:</span>
                                    <span className="value">{driver.motorista.cnh.validade}</span>
                                </div>  
                            </li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </div>
    ); 
}

export default DriverDeatails;
