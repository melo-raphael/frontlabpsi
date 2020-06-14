import React from 'react';

import './styles.css';


function DriverDeatails (props) {
    const { driver } = props.location.state;
    console.log('teste', driver)
    // exibir informacoes do motorista

    return(
        <h1>Detalhes</h1>
    ); 
}

export default DriverDeatails;
