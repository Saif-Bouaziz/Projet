import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGroup from '../component/InputGroup'
import axios from 'axios';
import bgImage from  "../video/background-img.mp4";


const ReclaaserDossier= () => { 
    const [form , setForm] = useState({}) ;  
    const [errors, setErrors] = useState({});  
    const [emplacements , setEmplacements] = useState([]) ; 


    const onChangeHandler = (e) => {  
        setForm({  
            ...form, 
            [e.target.name] : e.target.value , 
            
        })  
        } 

          useEffect(()=> {  
            axios.get('/api/emplacement') 
            .then (res=> {  
               setEmplacements(res.data)
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
                <a href="/" class="nav-brand text-dark">Reclasser Dossier</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter"> 
           <br />
               <a href="/RechercheDossier"><i class="fas fa-angle-double-left"></i> Retourner</a>
           </div>
        </div>
        <form action="/api/types" method="POST" id="add_type"  > 

        
        <label > Emplacement Dossier </label>
  <select name="emplacement" id="emplacement"   > 
  
  {  
       emplacements.map(({libelle}) => (
      <option value={libelle}>{libelle}</option>
       ))
  }
  
  
  </select>   
<div>
<label> Date d'effet</label>
  <input type="date" />
</div>

        
        
        

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

export default ReclaaserDossier;