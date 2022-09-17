import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGreffier from '../component/InputGreffier'
import axios from 'axios';
import bgImage from  "../video/background-img.mp4"

const AddGreffier = () => { 
    const [form , setForm] = useState({}) ;  
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {  
    setForm({  
        ...form, 
        [e.target.name] : e.target.value , 
        
    })  
    } 
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('/api/greffier', form)
        .then(res=>{ 
            alert(res.data.message)
          
        })
        .catch(err=>setErrors(err.response.data))
        
      } 


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
                <a href="/" class="nav-brand text-dark">Liste des greffiés</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/CreatePost/parametres/greffier"><i class="fas fa-angle-double-left"></i> Retourner</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Ajouter greffié</h2>
            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau greffié</span>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
        <InputGreffier label="nom" type="text" name="nom" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="date" type="text" name="date" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="adresse" type="text" name="adresse" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="etat" type="text" name="etat" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="nombre" type="text" name="nombre" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="payement" type="text" name="payement" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="cin" type="text" name="cin" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="tel" type="text" name="tel" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="cnss" type="text" name="cnss" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="contrat" type="text" name="contrat" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="sexe" type="text" name="sexe" onChangeHandler={onChangeHandler} /> 
        <InputGreffier label="actif" type="text" name="actif" onChangeHandler={onChangeHandler} /> 
        
         <div class="new_user" >
        <div class="form-group">
            <button   type="submit" class="btn text-dark update" >Enregistrer</button>
        </div>
        </div>  
        </form>

        

    </div> 
    
</main> 
</div>
        </div>
    );
};

export default AddGreffier;