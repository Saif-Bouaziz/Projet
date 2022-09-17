import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputParametres from '../component/InputParametres'
import bgImage from  "../video/background-img.mp4"

function UpdateCollaborateur() {
  

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
    axios.put(`/api/collaborateurs/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/collaborateur')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/collaborateurs/${id}`) 
    .then (res=> {  
       setForm(res.data)
    });
},)

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
            <a href="/" class="nav-brand text-dark">Liset des Collaborateurs</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/collaborateur"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Mise à jour Collaborateur</h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour enregistrer les modifications</span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputParametres label="Nom" type="text" name="Nom" onChangeHandler={onChangeHandler} value={form.Nom} /> 
<InputParametres label="Cin" type="text" name="Cin" onChangeHandler={onChangeHandler} value={form.Cin} />  
<InputParametres label="Ville" type="text" name="Ville" onChangeHandler={onChangeHandler} value={form.Ville} /> 
<InputParametres label="Rue" type="text" name="Rue" onChangeHandler={onChangeHandler} value={form.Rue} /> 
<InputParametres label="Num" type="text" name="Num" onChangeHandler={onChangeHandler} value={form.Num} /> 
<InputParametres label="Code" type="text" name="Code" onChangeHandler={onChangeHandler} value={form.Code} /> 
<InputParametres label="Activite" type="text" name="Activite" onChangeHandler={onChangeHandler} value={form.Activite} /> 
<InputParametres label="Tel" type="text" name="Tel" onChangeHandler={onChangeHandler} value={form.Tel} /> 
<InputParametres label="Fax" type="text" name="Fax" onChangeHandler={onChangeHandler} value={form.Fax} /> 
<InputParametres label="Email" type="text" name="Email" onChangeHandler={onChangeHandler} value={form.Email} /> 


 
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

export default UpdateCollaborateur;