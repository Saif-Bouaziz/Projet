import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputParametres from '../component/InputParametres'

function UpdateTache() {
  

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
    axios.put(`/api/taches/${id}`, form)
    .then(res=>{
      navigate('/Tache')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/taches/${id}`) 
    .then (res=> {  
       setForm(res.data)
    });
},[])

  return ( 
    <div> 
            
    <div className='page'> 
    <header id="header">
<nav>
    <div class="container">
        <div class="text-center">
            <a href="/" class="nav-brand text-dark">Liste des taches</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/Tache"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Mise à jour Tache </h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour enregistrer les modifications</span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputParametres label="Num d'affaires" type="text" name="Num" onChangeHandler={onChangeHandler} value={form.Num} /> 
<InputParametres label="Nom Client" type="text" name="Client" onChangeHandler={onChangeHandler} value={form.Client} /> 
 
<InputParametres label="Liste des taches" type="text" name="Tache" onChangeHandler={onChangeHandler} value={form.Tache} />  
<InputParametres label="Personne chargé" type="text" name="Personne" onChangeHandler={onChangeHandler} value={form.Personne} />  
<InputParametres label="Resolu ? " type="text" name="Resolu" onChangeHandler={onChangeHandler} value={form.Resolu} /> 





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

export default UpdateTache;