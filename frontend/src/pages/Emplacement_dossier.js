import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import EmplacementShow from '../component/EmplacementShow'; 
import axios from 'axios'
import bgImage from "../video/background-img.mp4"


const Emplacement_dossier = () => {  
    const [emplacement , setEmplacement] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this user ? ")) { 
          axios.delete(`/api/emplacement/${id}`) 
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
         axios.get('/api/emplacement') 
         .then (res=> {  
            setEmplacement(res.data)

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
                <a href="/" class="nav-brand text-dark">Liste des emplacement</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddEmplacement" class="border-shadow">
                   <span class="text-gradient">Ajouter Emplacement Dossier </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>libelle</th>
                           <th>Action</th>
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                emplacement.map(({libelle, _id}) => (
                <EmplacementShow libelle={libelle} ID={_id} OnDelete={OnDelete} />
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

export default Emplacement_dossier;