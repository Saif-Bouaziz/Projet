import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import axios from 'axios'
import HonorairesShow from '../component/HonorairesShow'; 
import TachesShow from '../component/TachesShow';


const Tache = () => {  
    const [taches , setTaches] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this Tache ? ")) { 
          axios.delete(`/api/taches/${id}`) 
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
         axios.get('/api/taches') 
         .then (res=> {  
            setTaches(res.data)

         });

    },)

    return (
        <div>

            <div className='page'> 
            <header id="header">
    <nav>
        <div class="container">
            <div class="text-center">
                <a href="/" class="nav-brand text-dark">Liste des Taches</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddTache" class="border-shadow">
                   <span class="text-gradient">Ajouter Taches </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Num d'affaires</th>
                           <th>Nom Client</th> 
                           <th>Taches</th>   
                           <th>Personne Chargé</th> 
                           <th>Résolu ? </th>
                           <th>Action</th>
                           
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                taches.map(({Tache, Num ,Client,Personne,Resolu,_id}) => (
                <TachesShow Tache={Tache} Num={Num} Client={Client} ID={_id} Personne={Personne} Resolu={Resolu} OnDelete={OnDelete} />
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

export default Tache;