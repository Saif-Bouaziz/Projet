import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputTransport from '../component/InputTransport';
import bgImage from  "../video/background-img.mp4"

function UpdateTransport() {
  

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
    axios.put(`/api/transport/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/parametres/transport')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/transport/${id}`) 
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
            <a href="/" class="nav-brand text-dark">Modifier prix transport</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/parametres/transport"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <span class="text-light">Remplir le champ pour modifier le prix du transport par jour</span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
<InputTransport label="montant" type="text" name="montant" onChangeHandler={onChangeHandler} value={form.montant} /> 

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

export default UpdateTransport ;