import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom'


const TribuShow = ({ Tribunal, Id, OnDelete }) => {

    return (
        <tr>
            <td>{Tribunal}</td>
            <td>
                <Link to={`/CreatePost/parametres/tribunaux_et_administration/${Id}/service`} class="btn border-shadow update">
                    <span class="text-gradient"><i class="bi bi-three-dots"></i></span>
                </Link>
                <Link to={`/CreatePost/parametres/tribunaux_et_administration/${Id}`} class="btn border-shadow update">
                    <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                </Link>
                <a class="btn border-shadow delete" data-id>
                    <span class="text-gradient" onClick={() => OnDelete(Id)}><i class="fas fa-times"></i></span>
                </a>
            </td>
        </tr>
    );
};

export default TribuShow;