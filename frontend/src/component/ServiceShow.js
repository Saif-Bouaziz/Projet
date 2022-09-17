import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const ServiceShow = ({ lieu, lundi_a, mardi_a, mercredi_a, jeudi_a, vendredi_a, samedi_a, ID, OnDelete }) => {
    const [tribunaux, setTribunaux] = useState([]);
    const { id } = useParams();

    return (
        <tr>
            <td>{lieu}</td>
            <td>{lundi_a}</td>
            <td>{mardi_a}</td>
            <td>{mercredi_a}</td>
            <td>{jeudi_a}</td>
            <td>{vendredi_a}</td>
            <td>{samedi_a}</td>
            <td>

                <Link to={`/CreatePost/parametres/tribunaux_et_administration/${id}/service/${ID}`} class="btn border-shadow update">
                    <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                </Link>
                <a class="btn border-shadow delete" data-id>
                    <span class="text-gradient" onClick={() => OnDelete(ID)}><i class="fas fa-times"></i></span>
                </a>
            </td>

        </tr>
    );
};

export default ServiceShow;