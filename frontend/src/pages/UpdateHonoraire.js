import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputParametres from '../component/InputParametres';
import bgImage from  "../video/background-img.mp4"

function UpdateHonoraire() {
  

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
    axios.put(`/api/honoraires/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/honoraires_en_extra')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/honoraires/${id}`) 
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
            <a href="/" class="nav-brand text-dark">Honoraire en Extra</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/honoraires_en_extra"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Mise à jour Honoraire </h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour enregistrer les modifications</span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputParametres label="Libelle" type="text" name="Libelle" onChangeHandler={onChangeHandler} value={form.Libelle} /> 
<InputParametres label="Libelle_Français" type="text" name="Libelle_Français" onChangeHandler={onChangeHandler} value={form.Libelle_Français} /> 
 
<InputParametres label="Montant" type="text" name="Montant" onChangeHandler={onChangeHandler} value={form.Montant} /> 



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

export default UpdateHonoraire;