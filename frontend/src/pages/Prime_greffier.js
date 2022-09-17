import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import axios from 'axios'
import PrimesShow from '../component/PrimesShow';
import bgImage from  "../video/background-img.mp4"


const Prime_greffier = () => {  
    const [primes , setPrimes] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this prime ? ")) { 
          axios.delete(`/api/primes/${id}`) 
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
         axios.get('/api/primes') 
         .then (res=> {  
            setPrimes(res.data)

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
                <a href="/" class="nav-brand text-dark">Liste des Primes</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddPrime" class="border-shadow">
                   <span class="text-gradient">Ajouter Prime </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Libelle</th>
                           <th>Montant</th>  
                           <th>Dissociable</th> 
                           <th>Impot</th> 
                           <th>Mensuel</th>  
                           <th>Action</th>
                           
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                primes.map(({Libelle, Montant , Dissociable ,Impot,Mensuel,_id}) => (
                <PrimesShow Libelle={Libelle} Montant={Montant} Dissociable={Dissociable} Impot={Impot} Mensuel={Mensuel} ID={_id} OnDelete={OnDelete} />
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

export default Prime_greffier;