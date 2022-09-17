import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputParametres from '../component/InputParametres'

function UpdateDossier() {
  

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
    axios.put(`/api/dossiers/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/dossiers/recherche')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/dossiers/${id}`) 
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
            <a href="/" class="nav-brand text-dark">Liste des Dossiers</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/parametres_globales"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Mise à jour Dossier </h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour enregistrer les modifications</span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputParametres label="Num d'affaire" type="text" name="Num" onChangeHandler={onChangeHandler} value={form.Num} /> 
<InputParametres label="Emplacement Dossier" type="text" name="Emplacement" onChangeHandler={onChangeHandler} value={form.Emplacement} /> 
 
<InputParametres label="Client" type="text" name="Client" onChangeHandler={onChangeHandler} value={form.Client} />  
<InputParametres label="Tel" type="text" name="Tel" onChangeHandler={onChangeHandler} value={form.Tel} /> 
<InputParametres label="Mission" type="text" name="Mission" onChangeHandler={onChangeHandler} value={form.Mission} /> 
<InputParametres label="Adversaire" type="text" name="Adversaire" onChangeHandler={onChangeHandler} value={form.Adversaire} /> 
<InputParametres label="Reste" type="text" name="Reste" onChangeHandler={onChangeHandler} value={form.Reste} /> 




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

export default UpdateDossier;