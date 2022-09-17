import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputClient from '../component/InputClient'
import axios from 'axios';
import bgImage from "../video/background-img.mp4"
import { Link } from 'react-router-dom'

const AddClient = () => { 
    const [form , setForm] = useState({}) ;  
    const [errors, setErrors] = useState({});
    const [collaborateurs, setCollaborateur] = useState([]) ;


    useEffect(()=> {  
        axios.get('/api/collaborateurs') 
        .then (res=> {  
           setCollaborateur(res.data)

        });

   },[])

    const onChangeHandler = (e) => {  
    setForm({  
        ...form, 
        [e.target.name] : e.target.value , 
        
    })  
    } 
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('/api/gestion_client', form)
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
                <a href="/" class="nav-brand text-dark">Liste des clients</a>
            </div>
        </div>
    </nav>
</header>
            

  <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
         <Link to={`/CreatePost/client/gestion_client`} class="btn border-shadow update"><i class="fas fa-angle-double-left"></i> Retourner</Link>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Ajouter client</h2>
            <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour ajouter un nouveau client</span>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >
      

        <div class="new_user">
 <div class="form-group"> 
        <label > collaborateur</label>
     <select name="collaborateur"  onChange ={onChangeHandler} > 
 
    {  
      collaborateurs.map(({Nom}) => (
     <option value={Nom}>{Nom}</option> 
      ))
    } 

 
 </select> 
 </div> 
 </div>

        <InputClient label="code client" type="text" name="code" onChangeHandler={onChangeHandler} /> 
        <InputClient label="raison sociale/nom" type="text" name="raison" onChangeHandler={onChangeHandler} /> 



             <div class="new_user">
             <div class="form-group"> 
        <label > type client</label>
        <select name="type" onChange ={onChangeHandler} > 
  
          <option name="type">personne physique</option>
          <option name="type">personne morale</option>

 
      </select> 
       </div> 
     </div>
              


              
             <div class="new_user">
             <div class="form-group"> 
        <label >situation fiscale</label>
        <select name="situation" onChange ={onChangeHandler} > 
  
          <option name="situation">non assujeti</option>
          <option name="situation">assujeti</option>
          <option name="situation">exonoré</option>

 
      </select> 
       </div> 
     </div>




    
        
              
         <InputClient label="matricule fiscale" type="text" name="matricule" onChangeHandler={onChangeHandler} /> 
        
         <div class="new_user">
             <div class="form-group"> 
         <table  >
              <tr>
                <th>Adresse designé</th>
               <td><InputClient label="ok" type="checkbox" name="adressedesigne" onChange={onChangeHandler} /> </td>
               <td>
                 <fieldset>
                    <legend>Détails</legend>
                       <table>
                       <tr><InputClient label="ville:" type="texte" name="ville" onChangeHandler={onChangeHandler} />  </tr>
                       <tr><InputClient label="rue:" type="texte" name="rue" onChangeHandler={onChangeHandler} />  </tr>
                       <tr><InputClient label="numéro:" type="texte" name="num" onChangeHandler={onChangeHandler} />  </tr>
                       <tr><InputClient label="code postale:" type="texte" name="postale" onChangeHandler={onChangeHandler} />  </tr>
                       </table>
                 </fieldset>
               </td>
             
            
              </tr>
             </table>
             </div> 
            </div>

            

             <InputClient label="adresse" type="text" name="adresse" onChangeHandler={onChangeHandler} /> 
             <InputClient label="activité contribuale" type="text" name="activite" onChangeHandler={onChangeHandler} /> 
             <InputClient label="tel" type="text" name="tel" onChangeHandler={onChangeHandler} /> 
             <InputClient label="fax" type="text" name="fax" onChangeHandler={onChangeHandler} /> 
             <InputClient label="email" type="text" name="email" onChangeHandler={onChangeHandler} /> 
        

       
        
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

export default AddClient;