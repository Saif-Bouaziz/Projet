import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGroup from '../component/InputGroup'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import bgImage from  "../video/background-img.mp4";


const CreationDosssier= () => { 
    const [form , setForm] = useState({}) ;   
    const navigate = useNavigate() 


    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {  
    setForm({  
        ...form, 
        [e.target.name] : e.target.value , 
        
    })  
    } 
    const onSubmitHandler = (e)=>{
        e.preventDefault() 
        navigate(`/DonneesDossier/${form.Clients}/${form.CIN}/${form.Type}/${form.Code}/${form.Tel}/${form.Activite}`)
       /* axios.post('/api/dossiers', form)  
        .then( console.log(form.CIN))
        .then(res=>{ 
            alert(res.data.message) 
            navigate(`/DonneesDossier/${form.Client}/${form.CIN}/${form.Type}`)
        })
        .catch(err=>setErrors(err.response.data))*/
        
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
                <a href="/" class="nav-brand text-dark">Creation Dossier</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           
           
           
           
           
           
        </div>
        <div class="form-title text-center">
            <h2 class="text-light">1. Client et Demandeurs</h2>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} > 
        <InputGroup label="Code" type="text" name="Code" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Matricule Fiscale/CIN" type="text" name="CIN" onChangeHandler={onChangeHandler} />   
        <InputGroup label="Raison Sociale/Nom" type="text" name="Clients" onChangeHandler={onChangeHandler} />  
       
        <div class="new_user">
     <div class="form-group">
        
        <p>Situation Fiscale </p>
  <div>
    <input type="radio" id="contactChoice1"
     name="Non" value="email" checked />
    <label for="contactChoice1">Non assujetie</label>

    <input type="radio" id="contactChoice2"
     name="Oui" value="telephone" />
    <label for="contactChoice2">Assujetie</label>

    <input type="radio" id="contactChoice3"
     name="Exonoré" value="courrier" />
    <label for="contactChoice3">Exonoré</label>
    </div>
    </div>
    </div>
        
        <InputGroup label="Activité Contribuale" type="text" name="Activite" onChangeHandler={onChangeHandler} /> 
        <InputGroup label="Tel" type="text" name="Tel" onChangeHandler={onChangeHandler} /> 

        <InputGroup label="Type Client" type="text" name="Type" onChangeHandler={onChangeHandler} /> 
       
       
         <div class="new_user" >
       
         <div class="form-group"> 
         
          <button  type="submit" class="btn text-dark update" >Suivant</button>
    
        </div>

        </div>  
        </form>

        

    </div> 
    
</main> 
</div>
        </div>
    );
};

export default CreationDosssier ;