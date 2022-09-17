import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGroup from '../component/InputGroup'
import axios from 'axios';
import bgImage from  "../video/background-img.mp4"

const AddPrime = () => { 
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
        axios.post('/api/primes', form)
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
                <a href="/" class="nav-brand text-dark">Liste des Primes</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter"> 
           <br />
               <a href="/CreatePost/parametres/Prime_greffier"><i class="fas fa-angle-double-left"></i> Retourner</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Nouveau Prime</h2>
            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau Prime</span>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
        <InputGroup label="Libelle" type="text" name="Libelle" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Montant" type="text" name="Montant" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Dissociable" type="text" name="Dissociable" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Impot" type="text" name="Impot" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Mensuel" type="text" name="Mensuel" onChangeHandler={onChangeHandler} /> 

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

export default AddPrime;