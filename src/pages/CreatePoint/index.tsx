import React, { useEffect, useState } from 'react';
import { FiArrowDownLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';

import './styles.css'

import logo from '../../assets/logo.svg';

interface Item {
    id: number;
    title: string;
    image_url: string;
}

const CreatePoint = () => {
    const [items, setItems] = useState<Item[]>([])
    useEffect(() => {
        api.get('items').then(response => {
            setItems(response.data);
        });
    }, []);
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="EColeta"/> 
                <Link to='/'>
                    <FiArrowDownLeft />
                    Voltar para home
                </Link>
            </header>
            <form action="">
                <h1>Cadastro do <br/> ponto de coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da Entidade</label>
                        <input 
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input 
                                type="text"
                                name="whatsapp"
                                id="whatsapp"
                            />                        
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>
                    <Map center={[-26.2864795, -48.8900668]} zoom={15} >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={[-26.2864795, -48.8900668]} />
                    </Map>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="estado" id="estado">
                                <option value="0">Selecione o estado</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione a cidade</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>
                        <h2>Ítems de Coleta</h2>
                        <span>Selecione um ou mais dos ítems abaixo</span>
                    </legend>
                    <ul className="items-grid">
                        {items.map(item => (
                            <li>
                                <img src={item.image_url} alt={item.title}/>
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>
                <button type="submit">Cadastrar Ponto de Coleta</button>
            </form>
        </div>
    )
};

export default CreatePoint;