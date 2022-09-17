import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputRecette from '../component/InputRecette';
import bgImage from  "../video/background-img.mp4"

function UpdateRecette() {
  

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
    axios.put(`/api/recette/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/recette_du_finance')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/recette/${id}`) 
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
            <a href="/recette_du_finance" class="nav-brand text-dark">Liste des recettes</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/recette_du_finance"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Nouvelle recette</h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour modifier la recette </span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputRecette label="libelle" type="text" name="libelle" onChangeHandler={onChangeHandler} value={form.libelle} /> 
<InputRecette label="montant" type="text" name="montant" onChangeHandler={onChangeHandler} value={form.montant} /> 

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

export default UpdateRecette ;