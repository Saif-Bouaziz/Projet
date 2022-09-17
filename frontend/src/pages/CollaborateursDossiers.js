import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGroup from '../component/InputGroup'
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom';
import Collaborateur from './Collaborateur';
import bgImage from  "../video/background-img.mp4";



const CollaborateursDossiers= () => {   
    const [collaborateurs , setCollaborateurs] = useState([]) ;  
    const [emplacements , setEmplacements] = useState([]) ; 
    const id = useParams();   
    const navigate = useNavigate() ;

    const Clients=id.Clients ;  
    const CIIN=id.CIN ;  
    const Types=id.Type ;  
    const Code= id.Code ; 
    const Tel = id.Tel; 
    const Activite = id.Activite;  
    const CodeD=id.CodeD ; 
    const type=id.type ; 
    const Mission=id.Mission ; 
    const emplacement=id.emplacement ; 
    const Lieu= id.Lieu; 
    const Num = id.Num; 
    const Service=id.Service; 
    const Observation=id.Observation;  
    const Nom = id.Nom ; 
    const Registre= id.Registre ; 
    const Adresse = id.Adresse ; 
    const AdresseD = id.AdresseD ; 
    const AdresseA = id.AdresseA ;  
    const Avocat = id.Avocat ; 
    



    const [form , setForm] = useState({Clients, CIIN, Types, Code,Tel,Activite, CodeD, type, Mission, emplacement, Lieu, Num, Service, Observation, Nom , Adresse, AdresseA, AdresseD, Avocat, Registre}) ;  
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {  
    setForm({  
        ...form, 
        [e.target.name] : e.target.value , 
        
    })  
    }  
    const onSubmitHandler = (e)=>{
        e.preventDefault(); 
        console.log(form)
        axios.post(`/api/dossiers`, form)
        .then(res=>{ 
            alert(res.data.message) 
            
          
        })
        .catch(err=>setErrors(err.response.data))
        
      }    
      
      
      /*useEffect(()=> {   
        console.log(id.CIN) 
        console.log(id.Client) 
        console.log(id.Type)
        axios.get(`/api/dossiers`) 
        .then (res=> {  
           setForm(res.data)
        });
    },[]) */
    
    
    /*useEffect(()=> { 
        
    })*/
   
   
    useEffect(()=> {  
        axios.get('/api/collaborateurs')  
        .then (res=> {  
           setCollaborateurs(res.data)
        });
   },[]) 
  
  
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
                <a href="/" class="nav-brand text-dark">Creation Dossier</a> 
            </div>
        </div>
    </nav>
     </header>
            

  <main id="site-main">
    <div class="container">
        
        
        <div class="box-nav d-flex justify-between">
   <div class="filter">  
   <br />
       <a href="/CreatePost/parametres/honoraires_en_extra"><i class="fas fa-angle-double-left"></i> Retourner</a>
   </div>
   </div>    

          
          
        
        <div class="form-title text-center">
            <h2 class="text-light">4. Ajouter Collaborateur </h2>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >  
       
      
     
        <InputGroup label="Code Collaborateur" type="text" name="CodeC" onChangeHandler={onChangeHandler}  /> 
       
        <div class="new_user">
 <div class="form-group"> 
        <label > Nom et Prenom </label>
 <select name="NomC" id="type" onChange ={onChangeHandler} > 
 
 {  
      collaborateurs.map(({Nom}) => (
     <option value={Nom}>{Nom}</option> 
      ))
 } 

 
 </select> 
 </div> 
 </div>
        
        
        <InputGroup label="CIN" type="text" name="CIN" onChangeHandler={onChangeHandler} />   


        <InputGroup label="Activité Contribuale" type="text" name="ActiviteC" onChangeHandler={onChangeHandler}  />  
        <InputGroup label="Tel" type="text" name="TelC" onChangeHandler={onChangeHandler} />   
        <InputGroup label="Part Collaborateur" type="text" name="Part" onChangeHandler={onChangeHandler} />  

        <div class="new_user">
        <div class="form-group">
        
        <p>Mode Reglement </p>
    <div>
    <input type="radio" id="contactChoice1"
     name="Non" value="email" checked />
    <label for="contactChoice1">Mensuel</label>

    <input type="radio" id="contactChoice2"
     name="Oui" value="telephone" />
    <label for="contactChoice2">Sur dossier</label>
    </div>  

    <br /> 
    


    <p>Type Reglement</p>
<div>
<input type="radio" id="contactChoice1"
 name="Pourcentage" value="email" checked  />
<label for="contactChoice1">Pourcentage</label>
<input type="radio" id="contactChoice2"
 name="Forfait" value="telephone"  />
<label for="contactChoice2">Forfait</label>
</div>

    </div>  
    </div>


         <div class="new_user" >
        <div class="form-group">
            <button   type="submit" class="btn text-dark update" >Enregistrer </button>
        </div>
        </div>  
        </form>

        

    </div> 
    
</main> 
</div>
        </div>
    );
};

export default CollaborateursDossiers;