import React, { useEffect, useState } from 'react';
import "./Type_dossier.css"; 
import axios from 'axios';
import bgImage from "../video/background-img.mp4";
import { Link } from 'react-router-dom'
import ClientShow from '../component/ClientShow';


const Gestion_client = () => {  
    const [client, setClient] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
    const [searchTerm,setsearchTearm]=useState("");
    
 


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this user ? ")) { 
          axios.delete(`/api/gestion_client/${id}`) 
          .then(res=> {  
            setMessage(res.data.message) 
            setShow(true) 
            setTimeout(()=> { 
                setShow(false)
            },4000)
            
          })
        }

    }



    useEffect(()=> {  
         axios.get('/api/gestion_client') 
         .then (res=> {  
            setClient(res.data)

         });

    },)

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
           <form action="/" method="POST">
           <div className='search'>
            <input 
            type="text" 
            placeholder='Rechercher'
            onChange={e => setsearchTearm(e.target.value)}/>
           </div>
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                       <th> collaborateur</th>
                       <th>raison sociale</th>
                       <th>matricule</th>
                        <th>ville</th>
                        <th>rue</th>
                        <th>num</th>
                        <th>code postale</th>
                          <th>activité</th>
                      <th>situation fiscale</th>
                        <th>action</th>

                           
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                client.filter((val)=>{
                    if (searchTerm==""){
                        return val
                    }else if (
                        (val.collaborateur.toLowerCase().includes(searchTerm.toLocaleLowerCase()))||(val.raison.toLowerCase().includes(searchTerm.toLocaleLowerCase())) || (val.matricule.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                        || (val.ville.toLowerCase().includes(searchTerm.toLocaleLowerCase())) || (val.rue.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                        || (val.num.toLowerCase().includes(searchTerm.toLocaleLowerCase())) || (val.code.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                        || (val.activite.toLowerCase().includes(searchTerm.toLocaleLowerCase())) ||  (val.situation.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
                    )
                        
                        {
                            return val
                        }
                    
                }).map((val)=>{
                    return (
                        
                            
                        <tr  >
                            <td>{val.collaborateur}</td>
                        <td>{val.raison}</td>
                        <td>{val.matricule}</td>
                        <td>{val.ville}</td>
                        <td>{val.rue}</td>
                        <td>{val.num}</td>
                        <td>{val.code}</td>
                        <td>{val.activite}</td>
                        <td>{val.situtation}</td>
                        <td>
                <Link to={`/gestion_client/${val._id}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(val._id)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
                        
                       </ tr>

                            
                    
                       
                    )
                })
             }
               
               
    

            </tbody>
               </table>

              
           <div class="box-nav d-flex justify-between">
            

           <Link to={`/AddClient`} class="btn border-shadow update">
           <span class="text-gradient">Ajouter client </span>
          
                 </Link>


           </div>

           </form>
       </div>
   </main>




              





            </div>
        </div>
    );
};

export default Gestion_client;