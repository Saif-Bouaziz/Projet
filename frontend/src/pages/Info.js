import React from 'react' 
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from 'axios'; 

import {useLocation} from "react-router-dom";
import bgImage from  "../video/background-img.mp4";
import "./info.css"



function Info(props) {  

  const {id} = useParams();  
  const [form, setForm] = useState({}); 
  const [dossiers , setDossiers] = useState([]) ;  
  const location = useLocation() ; 



  useEffect(()=> {   
    axios.get(`/api/dossiers/${id}`)   
    console.log('hello')
    
  },[]) 
 
useEffect(()=> {  
  axios.get(`/api/dossiers`) 
  .then (res=> {  
     setDossiers(res.data)
  });
},[])
console.log(location.state.msg)
  return (
    
   <div className='app'>  
        <video autoPlay loop muted>
<source src={bgImage} type="video/mp4" />
</video>  
  <div className='info'>
    <div className='page'>
    <header id="header">
    <nav>
        <div class="container">
            <div class="text-center">
                <a href="/" class="nav-brand text-dark">Toutes les informations sur le dossier</a>
            </div>
        </div>
    </nav> 
    </header>  
    <div className='client'>
    <h1>Informations Sur Le Client</h1> 
    <br /> 
    <h3>Code Client: </h3>  
    <p>{location.state.Code} </p>   
    <br />   
    <h3>Nom et Prenom </h3>  
<p>{location.state.Clients}</p> 
<br />   
    <h3>Carte d'identité</h3> 
<p>{location.state.CIIN}</p>  
<br />   
    <h3>Activité Contribuale </h3> 
<p>{location.state.Activite}</p>  
<br />   
    <h3>Numero Telephone </h3> 
<p>{location.state.Tel}</p>  
<br />   
    <h3>Type Client </h3> 
<p>{location.state.Types}</p> 
<br />
</div>
<br />
<div className='dossier'>
<h1>Informations Sur Le Dossier</h1>  
<br /> 
<h3>Code Dossier: </h3>  
<p>{location.state.CodeD} </p>
<br />    
<h3>Type Dossier: </h3>  
<p>{location.state.type} </p>
<br /> 
<h3>Mission: </h3>  
<p>{location.state.Mission} </p> 
<br /> 
<h3>Emplacement Dossier: </h3>  
<p>{location.state.emplacement} </p> 
<br /> 
<h3>Numero d'affaires: </h3>  
<p>{location.state.Num} </p> 
<br /> 
<h3>Service: </h3>  
<p>{location.state.Service} </p>  
<br /> 
<h3>Observations: </h3>  
<p>{location.state.Observation} </p>  
<br />
</div>
<br/>
<div className='adversaire'>
<h1>Informations Sur L'Adversaire</h1>  
<br /> 
<h3>Nom et Prenom de l'adversaire </h3>  
<p>{location.state.Nom} </p>
<br />    
<h3>Registre: </h3>  
<p>{location.state.Registre} </p>
<br /> 
<h3>Adresse: </h3>  
<p>{location.state.Adresse} </p> 
<br /> 
<h3>Adresse désigné: </h3>  
<p>{location.state.AdresseD} </p> 
<br /> 
<h3>Avocat de l'adversaire </h3>  
<p>{location.state.Avocat} </p> 
<br /> 
<h3>Adresse de l'avocat </h3>  
<p>{location.state.AdresseA} </p>  
<br />  
</div>
<br/>
<div className='collaborateur'>

<h1>Informations Sur Le Collaborateurs</h1>  
<br /> 
<h3>Carte d'identité du collaborateur </h3>  
<p>{location.state.CIN} </p>
<br />    
<h3>Activité Contribuale </h3>  
<p>{location.state.ActiviteC} </p>
<br /> 
<h3>Numero du Collaborateur: </h3>  
<p>{location.state.TelC} </p> 
<br /> 
<h3>Part Collaborateur: </h3>  
<p>{location.state.Part} </p> 
<br /> 
 
</div>


  




    
    
      
    </div>
    </div>
    </div>
  
  
  )




}

export default Info
