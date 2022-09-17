import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGroup from '../component/InputGroup'
import axios from 'axios';
import bgImage from  "../video/background-img.mp4"


const AddCollaborateur= () => { 
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
        axios.post('/api/collaborateurs', form)
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
                <a href="/" class="nav-brand text-dark">Liste des Collaborateurs</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter"> 
           <br />
               <a href="/CreatePost/parametres/collaborateur"><i class="fas fa-angle-double-left"></i> Retourner</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Nouveau Collaborateur</h2>
            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau honoraire</span>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
        <InputGroup label="Nom" type="text" name="Nom" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Cin" type="text" name="Cin" onChangeHandler={onChangeHandler} />  
        <InputGroup label="Ville" type="text" name="Ville" onChangeHandler={onChangeHandler} />  
        <InputGroup label="Rue" type="text" name="Rue" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Num" type="text" name="Num" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Code" type="text" name="Code" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Activite" type="text" name="Activite" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Tel" type="text" name="Tel" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Fax" type="text" name="Fax" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Email" type="text" name="Email" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Montant" type="text" name="Montant" onChangeHandler={onChangeHandler} /> 


        
        
        

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

export default AddCollaborateur;