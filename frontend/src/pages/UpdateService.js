import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputTribu from '../component/InputTribu'
import { Link } from 'react-router-dom'

const UpdateService = () => {
    const [form, setForm] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`/api/service/${id}`, form)
            .then(res => {
                navigate(-1)
            })
            .catch(err => setErrors(err.response.data))

    }
    useEffect(() => {
        axios.get(`/api/service/${id}`)
            .then(res => {
                setForm(res.data)
            });
    }, [])
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
                <div class="container">
                    <div class="box-nav d-flex justify-between">
                        <div class="filter">
                            <button onClick={() => navigate(-1)}><i class="fas fa-angle-double-left"></i> Retourner</button>
                        </div>
                    </div>
                    <div class="form-title text-center">
                        <h2 class="text-dark">modifier service</h2>
                        <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour modifier le tribunal </span>
                    </div>
                    <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
                        <InputTribu label="lieu" type="text" name="lieu" onChangeHandler={onChangeHandler} value={form.lieu} />
                        <InputTribu label="lundi_a" type="text" name="lundi_a" onChangeHandler={onChangeHandler} value={form.lundi_a} />
                        <InputTribu label="mardi_a" type="text" name="mardi_a" onChangeHandler={onChangeHandler} value={form.mardi_a} />
                        <InputTribu label="mercredi_a" type="text" name="mercredi_a" onChangeHandler={onChangeHandler} value={form.mercredi_a} />
                        <InputTribu label="jeudi_a" type="text" name="jeudi_a" onChangeHandler={onChangeHandler} value={form.jeudi_a} />
                        <InputTribu label="vendredi_a" type="text" name="vendredi_a" onChangeHandler={onChangeHandler} value={form.vendredi_a} />
                        <InputTribu label="samedi_a" type="text" name="samedi_a" onChangeHandler={onChangeHandler} value={form.samedi_a} />
                        <div class="new_user" >
                            <div class="form-group">
                                <button type="submit" class="btn text-dark update" >Enregistrer</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateService;