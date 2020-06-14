import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

import './styles.css';

import api from '../../Services/api';


function EditVehicle(props) {
    const [destino, setDestino] = useState('');
    const [dataSaida, setDataSaida] = useState('');
    const [dataChegada, setDataChegada] = useState('');
    const [kmAtual, setKmAtual] = useState(''); // verdade é a quantidade a ser add
    
    const { veiculo } = props.location.state;
    const history = useHistory();

console.log(Date("2020/05/03"))
    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            veiculoId: veiculo.id,
            kmAtual: parseFloat(kmAtual),
            dateSaida: formatDate(dataSaida),
            dataChegada: formatDate(dataChegada),
            destino
        }

        try {
            api.put(`/veiculos/${veiculo.id}/km`, data);
            alert(`Atualização realizado com sucesso`);
            history.push('/vehicles/list');
            
        } catch (error) {
            alert('error ao editar veiculo, tente novamente');
        }
        
    }
    function formatDate(date) {
        date.replace('/', '-');
    }

    return(
       <div className="edit-vehicle-container">
           <div className="header-container">
               <span>Edição de Veículo</span>
           </div>

           <form onSubmit={handleSubmit}>
                <div className="label-group">
                   <label>Placa</label>
                   <label> Modelo</label>
               </div>
               <div className="input-group">
                   <input 
                    placeholder={ veiculo.placa } 
                    value={veiculo.placa}
                    disabled={true}
                    />
                    <input 
                    placeholder={ veiculo.modelo } 
                    value={veiculo.modelo}
                    disabled={true}
                    />
               </div>

               <div className="label-group">
                   <label>Ano</label>
                   <label> Chassi</label>
               </div>

               <div className="input-group">
                   <input 
                    placeholder={ veiculo.ano } 
                    value={veiculo.ano}
                    disabled={true}
                    />
                    <input 
                    placeholder={ veiculo.chassi } 
                    value={veiculo.chassi}
                    disabled={true}
                    />
               </div>


               <div className="label-group">
                   <label>Renavam</label>
                   <label> Marca</label>
               </div>

               <div className="input-group">
                   <input 
                    placeholder={ veiculo.renavam } 
                    value={veiculo.renavam}
                    disabled={true}
                    />
                    <input 
                    placeholder={ veiculo.marca } 
                    value={veiculo.marca}
                    disabled={true}
                    />
               </div>

               <div className="label-group">
                   <label>Cor</label>
                   <label> Valor Pago</label>
               </div>

               <div className="input-group">
                   <input 
                    placeholder={ veiculo.cor } 
                    value={veiculo.cor}
                    disabled={true}
                    />
                    <input 
                    placeholder={ veiculo.valorPago } 
                    value={veiculo.valorPago}
                    disabled={true}
                    />
               </div>

               <div className="label-group">
                   <label>Mes IPVA</label>
                   <label> Km Atual</label>
               </div>

               <div className="input-group">
                   <input 
                    placeholder={ veiculo.mesIpva } 
                    value={veiculo.mesIpva}
                    disabled={true}
                    />
                    <input 
                    placeholder={ veiculo.kmAtual } 
                    value={veiculo.kmAtual}
                    disabled={true}
                    />
               </div>

               <div className="label-group">
                   <label>Distância</label>
                   <label>Destino</label>
               </div>

               <div className="input-group">
                   <input 
                    placeholder= "Distância da viagem"
                    value={kmAtual}
                    onChange= {e => setKmAtual(e.target.value)}
                    required ={true}
                    />
                    <input 
                    placeholder="Destino da viagem" 
                    value={destino}
                    onChange= {e => setDestino(e.target.value)}
                    required ={true}
                    />
               </div>

               <div className="label-group">
                   <label>Data de Saída</label>
                   <label>Data de chegada</label>
               </div>

               <div className="input-group">
                   <input 
                    placeholder="2020/03/25"
                    value={dataSaida}
                    onChange= {e => setDataSaida(e.target.value)}
                    required ={true}
                    />
                    <input 
                    placeholder="2020/03/27"
                    value={dataChegada}
                    onChange= {e => setDataChegada(e.target.value)}
                    required ={true}
                    />
               </div>

               <button className="button" type="submit">Salvar</button>
               <Link to="/vehicles/list"> Cancelar</Link>
           </form>
       </div>
    );
}

export default EditVehicle;