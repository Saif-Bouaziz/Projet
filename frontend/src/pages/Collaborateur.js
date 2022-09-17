import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import axios from 'axios'
import HonorairesShow from '../component/CollaborateursShow';
import bgImage from  "../video/background-img.mp4"


const Collaborateur = () => {  
    const [collaborateurs , setCollaborateurs] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this Collaborateur ? ")) { 
          axios.delete(`/api/collaborateurs/${id}`) 
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
         axios.get('/api/collaborateurs') 
         .then (res=> {  
            setCollaborateurs(res.data)

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
                <a href="/" class="nav-brand text-dark">Liste des Collaborateurs</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddCollaborateurs" class="border-shadow">
                   <span class="text-gradient">Ajouter Collaborateur </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Nom</th>                                  
                           <th>CIN</th> 
                           <th>Ville</th>   
                           <th>Rue</th>  
                           <th>Num</th>  
                           <th>Code</th>  
                           <th>Activite</th> 
                           <th>Tel</th>  
                           <th>Fax</th>  
                           <th>Email</th>   
                           <th>Montant</th>
                           <th>Action</th>
                           
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                collaborateurs.map(({Nom, Cin,Ville,Rue,Num,Code,Activite,Tel, Fax,Email,Montant,_id}) => (
                <HonorairesShow Nom={Nom} Cin={Cin} Ville={Ville} Rue={Rue} Num={Num} Code={Code} Activite={Activite}  
                Tel={Tel} Fax={Fax} Email={Email} Montant={Montant} ID={_id} OnDelete={OnDelete} />
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

export default Collaborateur;