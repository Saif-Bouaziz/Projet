import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputTribu from '../component/InputTribu'
import { Link } from 'react-router-dom'



const UpdateTribu = () => {

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
        axios.put(`/api/Tribunaux/${id}`, form)
            .then(res => {
                navigate('/CreatePost/parametres/tribunaux_et_administration')
            })
            .catch(err => setErrors(err.response.data))

    }
    useEffect(() => {
        axios.get(`/api/Tribunaux/${id}`)
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
                                <a class="nav-brand text-dark">Liste des Tribunuax</a>
                            </div>
                        </div>
                    </nav>
                </header>
                <div class="container">
                    <div class="box-nav d-flex justify-between">
                        <div class="filter">
                            <Link to={"/CreatePost/parametres/tribunaux_et_administration"}><i class="fas fa-angle-double-left"></i> Retourner</Link>
                        </div>
                    </div>
                    <div class="form-title text-center">
                        <h2 class="text-dark">Nouvel tribunal</h2>
                        <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour modifier le tribunal </span>
                    </div>
                    <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
                        <InputTribu label="Tribunal" type="text" name="Tribunal" onChangeHandler={onChangeHandler} value={form.Tribunal} />
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

export default UpdateTribu;