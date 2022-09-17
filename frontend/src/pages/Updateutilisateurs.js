import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputUtilisateurs from '../component/InputUtilisateurs';
import bgImage from  "../video/background-img.mp4"

function Updateutilisateurs() {
  

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
    axios.put(`/api/utilisateurs/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/Utilisateur')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/utilisateurs/${id}`) 
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
            <a href="/" class="nav-brand text-dark">Liste des Utilisateurs</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/Utilisateur"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Modifier Utilisateurs</h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour enregistrer les modifications</span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputUtilisateurs label="Email" type="text" name="Email" onChangeHandler={onChangeHandler} value={form.Email} /> 
<InputUtilisateurs label="Password" type="text" name="Password" onChangeHandler={onChangeHandler} value={form.Password} /> 
<InputUtilisateurs label="Domaine" type="text" name="Domaine" onChangeHandler={onChangeHandler} value={form.Domaine}/> 


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

export default Updateutilisateurs ;