import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import InputClient from '../component/InputClient';
import bgImage from  "../video/background-img.mp4"

function UpdateClient() {
  

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
    axios.put(`/api/gestion_client/${id}`, form)
    .then(res=>{
      navigate('/CreatePost/client/gestion_client')
    })
    .catch(err=>setErrors(err.response.data))
    
  } 
  useEffect(()=> {  
    axios.get(`/api/gestion_client/${id}`) 
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
            <a href="/Type-dossier" class="nav-brand text-dark">Liste des clients</a>
        </div>
    </div>
</nav> 
</header>
    <div class="container">
<div class="box-nav d-flex justify-between">
<div class="filter">
    <a href="/CreatePost/client/gestion_client"><i class="fas fa-angle-double-left"></i> Retourner</a>
</div>
</div>
<div class="form-title text-center">
 <h2 class="text-dark">Modifier client</h2>
 <span class="text-light">Remplir le formulaire çi dessous puis cliquer sur enregistrer pour modifier </span>
</div>
<form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >

<InputClient label="collaborateur" type="text" name="collaborateur" onChangeHandler={onChangeHandler}  value={form.collaborateur} /> 
        <InputClient label="code client" type="text" name="code" onChangeHandler={onChangeHandler} value={form.code}  /> 
        <InputClient label="raison sociale/nom" type="text" name="raison" onChangeHandler={onChangeHandler} value={form.ville}  /> 
   
             <table >
              <tr>
               <th>Type client</th>
               <td><InputClient label="personne physique" type="radio" name="type" onChangeHandler={onChangeHandler} value={form.type}  />  </td>
               <td><InputClient label="personne morale" type="radio" name="type" onChangeHandler={onChangeHandler} value={form.type} />  </td>
              </tr>
             </table>
        
        
             <table >
              <tr>
               <th>Situation fiscale</th>
               <td><InputClient label="non assujeti" type="radio" name="situation" onChangeHandler={onChangeHandler} value={form.situation}  />  </td>
               <td><InputClient label="assujeti" type="radio" name="situation" onChangeHandler={onChangeHandler} value={form.situation}  />  </td>
               <td><InputClient label="exonoré" type="radio" name="situation" onChangeHandler={onChangeHandler}  value={form.situation} />  </td>
              </tr>
             </table>
        
              
         <InputClient label="matricule fiscale" type="text" name="matricule" onChangeHandler={onChangeHandler} value={form.matricule}  /> 
        

         <table  >
              <tr>
                <th>Adresse designé</th>
               <td><InputClient label="ok" type="checkbox" name="adressedesigne" onChangeHandler={onChangeHandler} value={form.adressedesigne}  /> </td>
               <td>
                 <fieldset>
                    <legend>Détails</legend>
                       <table>
                       <tr><InputClient label="ville:" type="texte" name="ville" onChangeHandler={onChangeHandler} value={form.ville} />  </tr>
                       <tr><InputClient label="rue:" type="texte" name="rue" onChangeHandler={onChangeHandler} value={form.rue} />  </tr>
                       <tr><InputClient label="numéro:" type="texte" name="num" onChangeHandler={onChangeHandler} value={form.num} />  </tr>
                       <tr><InputClient label="code postale:" type="texte" name="postale" onChangeHandler={onChangeHandler} value={form.postale} />  </tr>
                       </table>
                 </fieldset>
               </td>
             
            
              </tr>
             </table>
            

             <InputClient label="adresse" type="text" name="adresse" onChangeHandler={onChangeHandler} value={form.adresse} /> 
             <InputClient label="activité contribuale" type="text" name="activite" onChangeHandler={onChangeHandler}value={form.activite}  /> 
             <InputClient label="tel" type="text" name="tel" onChangeHandler={onChangeHandler} value={form.tel} /> 
             <InputClient label="fax" type="text" name="fax" onChangeHandler={onChangeHandler} value={form.fax} /> 
             <InputClient label="email" type="text" name="email" onChangeHandler={onChangeHandler} value={form.email} /> 

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

export default UpdateClient;