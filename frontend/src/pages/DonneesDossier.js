import React, { useState , useEffect } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import InputGroup from '../component/InputGroup'
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom';
import bgImage from  "../video/background-img.mp4";



const DonneesDossier= () => {   
    const [users , setUsers] = useState([]) ;  
    const [emplacements , setEmplacements] = useState([]) ; 
    const id = useParams();   
    const navigate = useNavigate() ;

   const Clients=id.Clients ;  
    const CIIN=id.CIN ;  
    const Types=id.Type ;  
    const Code= id.Code ; 
    const Tel = id.Tel; 
    const Activite = id.Activite;



    const [form , setForm] = useState({Clients,CIIN,Types,Code, Tel, Activite }) ;  
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {  
    setForm({  
        ...form, 
        [e.target.name] : e.target.value , 
        
    })  
    }  
    const onSubmitHandler = (e)=>{
        e.preventDefault();    

        navigate(`/Adversaire/${form.Clients}/${form.CIIN}/${form.Types}/${form.Code}/${form.Tel}/${form.Activite}/${form.CodeD}/${form.type}/${form.Mission}/${form.emplacement}/${form.Lieu}/${form.Num}/${form.Service}/${form.Observation}`)


        /*console.log(form)
        axios.post(`/api/dossiers`, form)
        .then(res=>{ 
            alert(res.data.message) 
            
          
        })
        .catch(err=>setErrors(err.response.data))
        
      }   */ 
      
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
        axios.get('/api/users')  
        .then (res=> {  
           setUsers(res.data)
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
            <h2 class="text-light">2. Données Dossier</h2>
        </div>
        <form action="/api/types" method="POST" id="add_type" onSubmit={onSubmitHandler} >  
       
        <div class="new_user">
        <div class="form-group"> 
        <InputGroup label="Code Dossier" type="text" name="CodeD" onChangeHandler={onChangeHandler}  /> 

        
        <label > Type Dossier </label>
        <select name="type" id="type" onChange ={onChangeHandler} > 
        
        {  
             users.map(({Email}) => (
            <option value={Email}>{Email}</option> 
             ))
        }
         </select> 
        
       
       
       
        <InputGroup label="Mission" type="text" name="Mission" onChangeHandler={onChangeHandler}  /> 
            
  <label > Emplacement Dossier </label>
    <select name="emplacement" id="emplacement"  onChange ={onChangeHandler} > 
    
    {  
         emplacements.map(({libelle}) => (
        <option value={libelle}>{libelle}</option>
         ))
    }
    
    
    </select>  
    </div>
 </div>


        <InputGroup label="Lieu" type="text" name="Lieu" onChangeHandler={onChangeHandler}  />  
        <InputGroup label="Num d'affaire" type="text" name="Num" onChangeHandler={onChangeHandler}  />  
        <InputGroup label="Service" type="text" name="Service" onChangeHandler={onChangeHandler} />  
        <InputGroup label="Observation" type="text" name="Observation" onChangeHandler={onChangeHandler}  /> 


         <div class="new_user" >
        <div class="form-group">
            <button   type="submit" class="btn text-dark update" >Suivant </button>
        </div>
        </div>  
        </form>

        

    </div> 
    
</main> 
</div>
        </div>
    );
};

export default DonneesDossier;