import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet'
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';

import './styles.css'
import logo from '../../assets/logo.svg'
import api from '../../services/api';
import Dropzone from '../../components/dropzone/index';

interface Item {
    id: number;
    title: string;
    image_url: string;
}

interface IBGEUFResponse {
    sigla: string
}

interface IBGECityResponse {
    nome: string
}

const CreatePoint = () => {
    /*set the state value, usestate([]), because is an array, when you create an array or object, 
    you need to inform manually the variable type stored, you can do this creating an interface */   
    const [items, setItems] = useState<Item[]>([]);
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>();

    //this state will load the position in map that was accessed
    const [initialPosition, setInitialPosition] = useState<[number, number]>([0, 0]);

    //this state will store the inputs in the objects
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    })

    //states that store from selected from anywhere
    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

    //With this variable will send to homepage after finish the register
    const history = useHistory();

    /*Load you current latitude and longitude and store in initialPosition, navigator is a global variable that 
        with geolocation.getCurrentPosition, will get your position */ 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude} = position.coords;

            setInitialPosition([latitude, longitude])
        })
    }, [])

    //With the useeffect you can call all items from api, using (), will bring only one time, when the page is loaded 
    useEffect(() => {
        api.get('items').then(res => {
            setItems(res.data);
        });
    }, []);

    //Load ufs from api using axios
    useEffect(() => {
        axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(res => {
            const ufInitials = res.data.map(uf => uf.sigla);

            setUfs(ufInitials);
        });
    }, []);

    //load the cities when the UF changes 
    useEffect(() => {
        if(selectedUf === '0'){
            return
        }

        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(res => {
            const cityNames = res.data.map(city => city.nome);

            setCities(cityNames);
        })
    }, [selectedUf])

    //This function will get the element that you got from select with ChangeEvent from HTMLSelectElement and store in selectedUf
    function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
        const uf = event.target.value;

        setSelectedUf(uf);
    }

    //This function will get the element that you got from select with ChangeEvent from HTMLSelectElement and store in selectedCity
    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
        const city = event.target.value;

        setSelectedCity(city);
    }

    //This function will get the latitude and the longitude selected in the map and store in selectedPosition
    function handleMapClick(event: LeafletMouseEvent){
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng

        ])
    }

    //this function will store what you tap in the inputs, and store in object with the [name] and put the :value
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        
        setFormData({ ...formData, [name]: value })
    }

    /*This function will get a item ant select it, alreadySelect will verify if the item is selected, 
    and if >=0 will store the id selected in filteredItems and remove it  from the array, else will add a 
    item with the id selected */
    function handleSelectItem(id: number){
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if(alreadySelected >= 0){
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems);
        }else{
            setSelectedItems([ ...selectedItems, id])
        }
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const { name, email, whatsapp } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const items = selectedItems;

        const data = new FormData();

        data.append('name', name); 
        data.append('email', email);
        data.append('whatsapp', whatsapp);
        data.append('uf', uf);
        data.append('city', city);
        data.append('latitude', String(latitude)); 
        data.append('longitude', String(longitude));
        data.append('items', items.join(','));
        if(selectedFile){
            data.append('image', selectedFile);
        }
        

        await api.post('points', data);

        alert('Ponto de coleta criado!');

        history.push('/');
    }

    return(
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>

                <Link to="/" >
                    <FiArrowLeft />
                    Voltar para home 
                </Link> 
            </header>
            <form onSubmit={handleSubmit}>
                <h1>Cadastro do <br/> ponto de coleta</h1>

                <Dropzone onFileUploaded={setSelectedFile} />

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input type="text" name="name" id="name" onChange={handleInputChange} />
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={handleInputChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" onChange={handleInputChange} />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={initialPosition} zoom={15} onclick={handleMapClick}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={selectedPosition}/>
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
                                <option value="0">Selecione uma UF</option>
                                {ufs.map(uf => (
                                    <option key={uf} value={uf}>{ uf }</option>
                                ))}
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{ city }</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Ítens de coleta</h2>
                        <span>Selecione um ou mais ítens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (
                            <li 
                                key={item.id} 
                                onClick={() => handleSelectItem(item.id)} 
                                className={selectedItems.includes(item.id) ? 'selected' : ''} 
                            >
                                <img src={item.image_url} alt={item.title}/>
                                <span>{ item.title }</span>
                            </li>
                        ))}
                    </ul>
                </fieldset>

                <button type="submit">Cadastrar ponto de coleta</button>
            </form>
            
        </div>
    );
}

export default CreatePoint;
