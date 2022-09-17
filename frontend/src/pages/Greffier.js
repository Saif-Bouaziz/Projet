import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import GreffierShow from '../component/GreffierShow'; 
import axios from 'axios';
import bgImage from  "../video/background-img.mp4"


const Greffier = () => {  
    const [greffier , setGreffier] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this user ? ")) { 
          axios.delete(`/api/greffier/${id}`) 
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
         axios.get('/api/greffier') 
         .then (res=> {  
            setGreffier(res.data)

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
                <a href="/" class="nav-brand text-dark">Liste des greffiés</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddGreffier" class="border-shadow">
                   <span class="text-gradient">Ajouter greffié</span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                            <th>nom</th>
                           <th>date de naissance</th>
                           <th>adresse</th>
                           <th>état civile</th>
                           <th>nombre d'enfants</th>
                           <th>type de payement</th>
                           <th>cin</th>
                           <th>tel</th>
                           <th>cnss</th>
                           <th>contrat</th>
                           <th>sexe</th>
                           <th>actif</th>
                           <th>action</th>
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                greffier.map(({nom, date, adresse, etat, nombre, payement, cin, tel, cnss, contrat, sexe, actif, _id}) => (
                <GreffierShow nom={nom} date={date} adresse={adresse} etat={etat} nombre={nombre} payement={payement} cin={cin} tel={tel}
                cnss={cnss} contrat={contrat} sexe={sexe} actif={actif}  ID={_id} OnDelete={OnDelete} />
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

export default Greffier;