import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import axios from 'axios'
import HonorairesShow from '../component/HonorairesShow';
import bgImage from  "../video/background-img.mp4"


const Honoraires_extra = () => {  
    const [honoraires , setHonoraires] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this Honoraire ? ")) { 
          axios.delete(`/api/honoraires/${id}`) 
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
         axios.get('/api/honoraires') 
         .then (res=> {  
            setHonoraires(res.data)

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
                <a href="/" class="nav-brand text-dark">Honoraire en Extra</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddHonoraire" class="border-shadow">
                   <span class="text-gradient">Ajouter Honoraire </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Libelle</th>
                           <th>Libelle_Français</th> 
                           <th>Montant</th>  
                            
                           <th>Action</th>
                           
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                honoraires.map(({Libelle, Libelle_Français ,Montant,_id}) => (
                <HonorairesShow Libelle={Libelle} Libelle_Français={Libelle_Français} Montant={Montant} ID={_id} OnDelete={OnDelete} />
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

export default Honoraires_extra;