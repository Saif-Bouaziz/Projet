import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import TransportShow from '../component/TransportShow'; 
import axios from 'axios'
import bgImage from  "../video/background-img.mp4"

const Transport = () => {  
    const [transport , setTransport] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this user ? ")) { 
          axios.delete(`/api/transport/${id}`) 
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
         axios.get('/api/transport') 
         .then (res=> {  
            setTransport(res.data)

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
                <a href="/" class="nav-brand text-dark">Mis à jour des paramètres</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
          
           <form action="/" method="POST">
               <table class="table">
            <tbody>  
               
               
             {  
                transport.map(({montant, _id}) => (
                <TransportShow montant={montant} ID={_id} OnDelete={OnDelete} />
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

export default Transport;