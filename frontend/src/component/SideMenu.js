import React from 'react';
import { useState } from "react";
import MenuItem from './MenuItem';
import Home from '../pages/Home';
import { Link, useNavigate } from 'react-router-dom';
import "../pages/CreatePost.css";


const menuItems = [
    {
        name: 'Paramètres',
        exact: true,
        subMenus: [
            { name: "Type dossier", to: "/CreatePost/parametres/Type_Dossier" },
            { name: "Parametres Globales", to: "/CreatePost/parametres/parametres_globales" },
            { name: "Honoraires en Extra", to: "/CreatePost/parametres/honoraires_en_extra" },
            { name: "Timbre", to: "/CreatePost/parametres/timbre" },
            { name: "Photocopie", to: "/CreatePost/parametres/photocopie" },
            { name: "Transport", to: "/CreatePost/parametres/transport" },
            { name: "Recette du finance", to: "/CreatePost/parametres/recette_du_finance" },
            { name: "Emplacement dossier", to: "/CreatePost/parametres/emplacement_dossier" },
            { name: "Tribunaux et administration", to: "/CreatePost/parametres/tribunaux_et_administration" },
            { name: "Utilisateur", to: "/CreatePost/parametres/utilisateur" },
           // { name: "Huissier", to: "/CreatePost/parametres/huissier" },
            { name: "Collaborateur", to: "/CreatePost/parametres/collaborateur" },
            { name: "Greffier", to: "/CreatePost/parametres/greffier" },
            { name: "Prime greffier", to: "/CreatePost/parametres/prime_greffier" },
        ],
        iconClassName: 'bi bi-gear',
    },
    {
        name: 'Client',
        exact: true,
        subMenus: [
        { name: "Gestion client", to: "/CreatePost/client/gestion_client" },
        ],
        //to: "/CreatePost/client",
        iconClassName: 'bi bi-people-fill',
    },
    {
        name: 'Dossier',
        exact: true,
       // to: "/CreatePost/dossier", 
        subMenus: [
            { name: "Recherche Dossier", to: "/RechercheDossier" }, 
            { name: "Creation Dossier", to: "/CreationDossier" } ,
           
            
        ],
        iconClassName: 'bi bi-folder',

    },
    {
        name: 'Facture',
        exact: true,
        subMenus: [
            { name: "Créer Facture", to: "/CreatePost/Facture" },
        ],
        iconClassName: 'bi bi-receipt-cutoff',
    },
];

const SideMenu = () => {
   
    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.replace("/");
    }
    return (
        <div className='side-menu'>
            <div className='main-menu'>
                <ul>
                    {menuItems.map((menuItem, index) => (
                        <MenuItem
                            key={index}
                            name={menuItem.name}
                            exact={menuItem.exact}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            iconClassName={menuItem.iconClassName}
                        />
                    ))}
                    {/*<MenuItem
                        name={"Parametres"}
                        subMenus={[{ name: "type dossier" }, { name: "taxe" }]}
                    />
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-people-fill"></i>
                            </div>
                            Client
                        </a>
                    </li>
                    <li>
                        <a className='menu-item'>
                            <div className='menu-icon'>
                                <i class="bi bi-folder"></i>
                            </div>
                            Dossier
                        </a>
    </li> */}
                </ul>

            </div>
            <div className='side-menu-footer'>
                <div className='user-info'>
                </div>
                <div className='logout'>
                    <button onClick={() => handleLogout()}>
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                        <p>Déconnexion</p>
                    </button>


                </div>




            </div>
        </div>

    );
};

export default SideMenu;