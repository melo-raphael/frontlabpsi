import React from 'react';
import { Link }from 'react-router-dom';


import logo from '../../assets/logo.png';
import './styles.css'

function Home () {
    return(
       <div className="main-container">
           <img src={logo} alt="logo"/>
           <section>
                <div className="actions-container">
                    {/*Merda*/}
                    <Link to="/vehicle/register" className="button">Cadastrar veículos</Link>                    
                    <Link to="/vehicles/list" className="button">Listar veículos</Link>                    
                    <Link to="/drivers/list" className="button">Listar motoristas</Link>                    
                </div>
           </section>
       </div>
    );
}

export default Home;