import React, { useEffect, useState } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import axios from 'axios'
import ParametresShow from '../component/ParametresShow';
import bgImage from  "../video/background-img.mp4"


const Parametres_globales = () => {  
    const [parametres , setParametres] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);
  


    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this parametre ? ")) { 
          axios.delete(`/api/parametres/${id}`) 
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
         axios.get('/api/parametres') 
         .then (res=> {  
            setParametres(res.data)

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
                <a href="/" class="nav-brand text-dark">Parametres Globales</a>
            </div>
        </div>
    </nav> 
    </header>
           
   <main id="site-main">
       <div class="container">
           <div class="box-nav d-flex justify-between">
               <a href="/AddParametre" class="border-shadow">
                   <span class="text-gradient">Ajouter Parametre </span>
               </a>
           </div>
          
           <form action="/" method="POST">
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Parametre</th>
                           <th>Valeur</th>  
                            
                           <th>Action</th>
                           
                           
                       </tr>
                   </thead>
            <tbody>  
               
               
             {  
                parametres.map(({Parametre, Valeur ,_id}) => (
                <ParametresShow Parametre={Parametre} Valeur={Valeur}  ID={_id} OnDelete={OnDelete} />
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

export default Parametres_globales;