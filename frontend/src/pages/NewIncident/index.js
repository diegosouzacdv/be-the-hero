import React, { useState } from 'react'
import './style.css'
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'; 
import api from '../../services/api';


export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

   async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            }).then(response => 
                history.push('/profile'))
           
        } catch (error) {
            console.log(error)
            alert('Erro ao cadastrar caso, tente novamente.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"></img>
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.
                    </p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size="16" color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                    type="text" 
                    placeholder="Título do Caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    ></input>
                    <textarea 
                    type="text" 
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}

                    ></textarea>
                    <input 
                    type="text" 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}

                    ></input>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}