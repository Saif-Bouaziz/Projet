import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputGreffier from '../component/InputGreffier'
import bgImage from  "../video/background-img.mp4"

function UpdateGreffier() {
  

  const [form, setForm] = useState({});
  const {id} = useParams();
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    
  };

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    axios.put(`/api/greffier/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/greffier')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/greffier/${id}`) 
    .then (res=> {  
       setForm(res.data)
    });
},[])

  return ( 
    <div className='app'>  
    <video autoPlay loop muted>
<source src={bgImage} type="video/mp4" />
</video>  

            
    <div className='page'> 
    <header id="header">
<nav>
    <div class="container">
        <div class="text-center">
            <a href="/Greffier" class="nav-brand text-dark">Liste des greffiés</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/greffier"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Modifier greffié</h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour modifier </span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputGreffier label="nom" type="text" name="nom" onChangeHandler={onChangeHandler} value={form.nom} /> 
<InputGreffier label="date" type="text" name="date" onChangeHandler={onChangeHandler} value={form.date} /> 
<InputGreffier label="adresse" type="text" name="adresse" onChangeHandler={onChangeHandler} value={form.adresse} /> 
<InputGreffier label="etat" type="text" name="etat" onChangeHandler={onChangeHandler} value={form.etat} /> 
<InputGreffier label="nombre" type="text" name="nombre" onChangeHandler={onChangeHandler} value={form.nombre} /> 
<InputGreffier label="payement" type="text" name="payement" onChangeHandler={onChangeHandler} value={form.payement} /> 
<InputGreffier label="cin" type="text" name="cin" onChangeHandler={onChangeHandler} value={form.cin} /> 
<InputGreffier label="tel" type="text" name="tel" onChangeHandler={onChangeHandler} value={form.tel} /> 
<InputGreffier label="cnss" type="text" name="cnss" onChangeHandler={onChangeHandler} value={form.cnss} /> 
<InputGreffier label="contrat" type="text" name="contrat" onChangeHandler={onChangeHandler} value={form.contrat} /> 
<InputGreffier label="sexe" type="text" name="sexe" onChangeHandler={onChangeHandler} value={form.sexe} /> 
<InputGreffier label="actif" type="text" name="actif" onChangeHandler={onChangeHandler} value={form.actif} /> 


<div class="new_user" >
<div class="form-group">
 <button   type="submit" class="btn text-dark update" >Enregistrer</button>
</div>
</div>  
</form>

</div> 
    </div>
</div>
  )
}

export default UpdateGreffier;