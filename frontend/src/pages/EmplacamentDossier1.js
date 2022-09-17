import React, { useEffect, useState } from 'react';
import "./Type_dossier.css";
import axios from 'axios';

const EmplacamentDossier1 = () => {
    const [dossier, setDossier] = useState([]);
    const [searchTerm, setsearchTearm] = useState("");
    const [search, setSearch] = useState("");
    const [emplacement, setEmplacement] = useState([]);



    useEffect(() => {
        axios.get('/api/dossier')
            .then(res => {
                setDossier(res.data)

            });

    }, )


    useEffect(() => {
        axios.get('/api/emplacement')
            .then(res => {
                setEmplacement(res.data)

            });

    }, [])
    return (
        <div className='page'>
            <header id="header">
                <nav>
                    <div class="container">
                        <div class="text-center">
                            <a href="/" class="nav-brand text-dark">Liste des Dossiers</a>
                        </div>
                    </div>
                </nav>
            </header>
            <main id="site-main">
                <div class="container">
                    <form action="/" method="POST">
                        <div className='search'>
                            <div class="new_user">
                                <div class="form-group">
                                    <label > Emplacement</label>
                                    <select name="emplacement" onChange={e => setSearch(e.target.value)}  >
                                        {
                                            emplacement.map(({ libelle }) => (
                                                <option value={libelle}>{libelle}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='search'>
                            <h3>Mot Cles</h3>
                            <input
                                type="text"
                                placeholder='Mot Cles'
                                onChange={e => setsearchTearm(e.target.value)} />
                        </div>
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Id Dossier</th>
                                    <th>Num affaire</th>
                                    <th>Emplacement</th>
                                    <th>Client</th>
                                    <th>Tel</th>
                                    <th>Mission</th>
                                    <th>Adversaire</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dossier.filter((val) => {

                                        if (searchTerm == "") {
                                            return val
                                        } else if
                                            ((val.Num.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                                            || (val.emplacement.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                                            || (val.Tel.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                                            || (val.Mission.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

                                        ) {
                                            return val
                                        }

                                    }).filter((val) => {

                                        if (search == "") {
                                            return val
                                        } else if
                                            ((val.emplacement.toLowerCase().includes(search.toLocaleLowerCase()))
                                        ) {
                                            return val
                                        }

                                    }).map((val) => (
                                        <tr>
                                            <td>{val.Num}</td>
                                            <td>{val.Num_affaire}</td>
                                            <td>{val.emplacement}</td>
                                            <td>{val.Client}</td>
                                            <td>{val.Tel}</td>
                                            <td>{val.Mission}</td>
                                            <td>{val.Adversaire}</td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default EmplacamentDossier1;