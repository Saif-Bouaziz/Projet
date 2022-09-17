import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputEmplacement from '../component/InputEmplacement'
import axios from 'axios';
import bgImage from  "../video/background-img.mp4"


const AddEmplacement = () => { 
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
        axios.post('/api/emplacement', form)
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
                <a href="/" class="nav-brand text-dark">Liste des emplacement dossier</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/CreatePost/parametres/Emplacement_dossier"><i class="fas fa-angle-double-left"></i> Retourner</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Ajouter emplacement dossier</h2>
            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau emplacement</span>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
        <InputEmplacement label="libelle" type="text" name="libelle" onChangeHandler={onChangeHandler} /> 
        
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

export default AddEmplacement;