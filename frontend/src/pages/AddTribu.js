import React, { useState, useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css";
import InputGroup from '../component/InputGroup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'



const AddTribu = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()


    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,

        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('/api/Tribunaux', form)
            .then(res => {
                navigate('/CreatePost/parametres/tribunaux_et_administration')

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
                                <a class="nav-brand text-dark">Liste des Tribunaux</a>
                            </div>
                        </div>
                    </nav>
                </header>


                <main id="site-main">
                    <div class="container">
                        <div class="box-nav d-flex justify-between">
                            <div class="filter">
                                <br />
                                <Link to={"/CreatePost/parametres/tribunaux_et_administration"}><i class="fas fa-angle-double-left"></i> Retourner</Link>
                            </div>
                        </div>
                        <div class="form-title text-center">
                            <h2 class="text-dark">Nouveau Tribunal</h2>
                            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau Tribunal</span>
                        </div>
                        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
                            <InputGroup label="Tribunal" type="text" name="Tribunal" onChangeHandler={onChangeHandler} />


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

export default AddTribu;