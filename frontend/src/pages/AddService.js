import React, { useState, useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css";
import InputGroup from '../component/InputGroup'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'

const AddService = () => {

    const { id } = useParams();
    const [form, setForm] = useState({ idTribu: id });
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});



    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/service', form)
            .then(res => {
                navigate(`/CreatePost/parametres/tribunaux_et_administration/${id}/service`)
            })
            .catch(err => setErrors(err.response.data))

    }


    return (
        <div>
            <div className='page'>

                <header id="header">
                    <nav>
                        <div class="container">
                            <div class="text-center">
                                <a class="nav-brand text-dark">Liste des Services</a>
                            </div>
                        </div>
                    </nav>
                </header>


                <main id="site-main">
                    <div class="container">
                        <div class="box-nav d-flex justify-between">
                            <div class="filter">
                                <br />
                                <Link to={`/CreatePost/parametres/tribunaux_et_administration/${id}/service`}><i class="fas fa-angle-double-left"></i> Retourner</Link>
                            </div>
                        </div>
                        <div class="form-title text-center">
                            <h2 class="text-dark">Nouveau Service</h2>
                            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau Service</span>
                        </div>
                        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
                            <InputGroup label="lieu" type="text" name="lieu" onChangeHandler={onChangeHandler} />
                            <InputGroup label="lundi_a" type="text" name="lundi_a" onChangeHandler={onChangeHandler} />
                            <InputGroup label="mardi_a" type="text" name="mardi_a" onChangeHandler={onChangeHandler} />
                            <InputGroup label="mercredi_a" type="text" name="mercredi_a" onChangeHandler={onChangeHandler} />
                            <InputGroup label="jeudi_a" type="text" name="jeudi_a" onChangeHandler={onChangeHandler} />
                            <InputGroup label="vendredi_a" type="text" name="vendredi_a" onChangeHandler={onChangeHandler} />
                            <InputGroup label="samedi_a" type="text" name="samedi_a" onChangeHandler={onChangeHandler} />

                            <div class="new_user" >
                                <div class="form-group">
                                    <button type="submit" class="btn text-dark update" >Enregistrer</button>
                                </div>
                            </div>
                        </form>



                    </div>

                </main>
            </div>
        </div>
    );
};

export default AddService;