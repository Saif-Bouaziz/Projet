import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import axios from 'axios'
import UtilisateursShow from '../component/UtilisateursShow';
import bgImage from  "../video/background-img.mp4"


const Utilisateur = () => {  
    const [utilisateurs , setUtilisateurs] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this user ? ")) { 
          axios.delete(`/api/utilisateurs/${id}`) 
          .then(res=> {  
            setMessage(res.data.message) 
            setShow(true) 
            setTimeout(()=> { 
                setShow(false)
            })
            
          })
        }

    }
    useEffect(()=> {  
         axios.get('/api/utilisateurs') 
         .then (res=> {  
            setUtilisateurs(res.data)

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
                <a href="/" class="nav-brand text-dark">Liste des utilisateurs</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddUtilisateur" class="border-shadow">
                   <span class="text-gradient">Ajouter utilisateurs </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Email</th>
                           <th>Password</th>  
                           <th>Domaine</th>  
                           <th>Action</th>
                           
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                utilisateurs.map(({Email, Password , Domaine ,_id}) => (
                <UtilisateursShow Email={Email} Password={Password} Domaine={Domaine}  ID={_id} OnDelete={OnDelete} />
                ))
             }
               
               
    

            </tbody>
               </table>
           </form>
       </div>
   </main>




            </div>
        </div>
    );
};

export default Utilisateur;