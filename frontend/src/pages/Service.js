import React, { useEffect, useState } from 'react';
import "./Type_dossier.css";
import axios from 'axios'
import ServiceShow from '../component/ServiceShow';
import { Link, useParams } from 'react-router-dom'




const Service = () => {
    const [tribunaux, setTribunaux] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get('/api/Tribunaux')
            .then(res => {
                setTribunaux(res.data)
            })
    })
    const [service, setService] = useState([]);
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const OnDelete = (id) => {
        if (window.confirm("Are you sure to delete this user ? ")) {
            axios.delete(`/api/service/${id}`)
                .then(res => {
                    setMessage(res.data.message)
                    setShow(true)
                    setTimeout(() => {
                        setShow(false)
                    }, 4000)

                })
        }

    }
    useEffect(() => {
        axios.get('/api/service')
            .then(res => {
                setService(res.data)

            });

    })


    return (
        <div>

            <div className='page'>

                <header id="header">
                    <nav>
                        <div class="container">
                            <div class="text-center">
                                <a class="nav-brand text-dark">Liste des services</a>
                                <br />
                                <br />

                                {
                                    tribunaux.map(({ Tribunal, _id }) => (
                                        (_id == id) ? (Tribunal) : (null)))

                                }
                            </div>
                        </div>
                    </nav>
                </header>

                <main id="site-main">
                    <div class="container">
                        <div class="box-nav d-flex justify-between">
                            <div class="filter">
                                <Link to={"/CreatePost/parametres/tribunaux_et_administration"}><i class="fas fa-angle-double-left"></i> Retourner</Link>
                            </div>
                        </div>
                        <br />

                        <div class="box-nav d-flex justify-between">
                            <Link to={`/CreatePost/parametres/tribunaux_et_administration/${id}/service/AddService`} class="border-shadow">
                                <span class="text-gradient">Ajouter Service </span>
                            </Link>
                        </div>

                        <form action="/" method="POST">
                            <table class="table">
                                <thead class="thead-dark">
                                    <tr>

                                        <th>lieu</th>
                                        <th>lundi_a</th>
                                        <th>mardi_a</th>
                                        <th>mercredi_a</th>
                                        <th>jeudi_a</th>
                                        <th>vendredi_a</th>
                                        <th>samedi_a</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        service.map(({ lieu, lundi_a, mardi_a, mercredi_a, jeudi_a, vendredi_a, samedi_a, idTribu, _id }) => (
                                            (idTribu == id) ? (<ServiceShow lieu={lieu} lundi_a={lundi_a} mardi_a={mardi_a} mercredi_a={mercredi_a} jeudi_a={jeudi_a} vendredi_a={vendredi_a} samedi_a={samedi_a} ID={_id} OnDelete={OnDelete} />) : (null)))
                                    }
                                </tbody>
                            </table>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Service;