import React, { useState } from "react";
import "../index.css"
import Signup from "../component/Signup";
import Login from "../component/Login";
import { Navigate } from "react-router-dom";


const Home = () => {
   
  
  return (
    <div className="home">
     
      <React.Fragment>
      
        <div id="loader-wrapper">
          <div id="loader"><div class="sk-spinner sk-spinner-cube-grid"><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div><div class="sk-cube"></div></div></div>
        </div>

        <section id="header">   
          <div class="container">
            <div class="row text-center">
              <div class="col-md-8">
            
                <h1 ><centre><b>Bienvenu ! </b></centre></h1>
                <h1 class="white-text">Gérer vos Factures facilement</h1>
                <h5 class="white-text">Gérez votre fichier client, établissez des devis et générez des factures gratuitement</h5>
                <div id="countdown" class="white-text"></div>
              </div>
            </div>
          </div>
          <div class="animation">
            <a class="arrow-down-animation" data-scroll href="#about"><i class="fa fa-angle-down"></i></a>
          </div>
        </section>

        <section id="about">
          <div class="container">
            <div class="row text-center">

              <div data-sr="enter top over 1s, wait 0.3s, move 24px, reset" class="col-md-4">
                <i class="fab fa-500px"></i>
                <h3 class="hh">Réactivité</h3>
                <div class="colored-line-small-center"></div>

              </div>

              <div data-sr="enter bottom over 1s, wait 0.3s, move 24px, reset" class="col-md-4 middle">
                <i class="fa-solid fa-file-shield"></i>
                <h3 class="hh">Confidentialité</h3>
                <div class="colored-line-small-center"></div>

              </div>

              <div data-sr="enter top over 1s, wait 0.3s, move 24px, reset" class="col-md-4">
                <i class="fa-solid fa-scale-balanced"></i>
                <h3 class="hh">Transparence des honoraires</h3>
                <div class="colored-line-small-center"></div>

              </div>
            </div>
          </div>
        </section>

        <section id="subscribe">
          <div class="container">
            <i data-sr="ease-in over 1s, reset" class="fa fa-envelope icontop"></i>
            <div class="row text-center">
              <div class="col-md-8 col-md-offset-2">
               
                 <table>
                  <td><Signup /></td>
                 
                 </table>
                
              </div>
            </div>

          </div>
       
        </section>

        <section id="sec">
          <div className="row">
            <h3 className="section-heading">Nos Services</h3>
          </div>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-gear" />
                </div>
                <h3>Gestion des matières</h3>
                <p>
                  Organiser et gérer les questions juridiques, y compris toutes les données et documents juridiques connexes, en un seul endroit.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-calendar" />
                </div>
                <h3>Gestion des taches</h3>
                <p>
                  Organiser, gérer et collaborer à des tâches juridiques. Suivez vos tâches grâce à notre interface simple et intuitive.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-folder" />
                </div>
                <h3>Gestion des dossiers</h3>
                <p>
                  Gardez les documents juridiques, les ententes, les notes et les courriels classés par matière, indexés et consultables.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-user-group" />
                </div>
                <h3>Gestion des clients</h3>
                <p>
                  Accédez aux données les plus exactes et les plus actuelles du client grâce à une base de données centralisée.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-timeline" />
                </div>
                <h3>Planification</h3>
                <p>
                  Rappelez-vous et gérez les rendez-vous, les échéances et les réunions du personnel sur un seul calendrier central.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fas fa-coins" />
                </div>
                <h3>Gestion des finances</h3>
                <p>
                  Suivez toutes les transactions monétaires dans un module de facturation intégré doté de fonctions comptables complètes.
                </p>
              </div>
            </div>
          </div>
        </section>




      </React.Fragment>
    </div>
  );
}
export default Home;