import React, { useEffect, useState } from 'react'; 
import { useRef } from 'react';
import SideMenu from '../component/SideMenu';
import "./Type_dossier.css"; 
import axios from 'axios'
import DossiersShow from '../component/DossiersShow';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print'; 
import bgImage from  "../video/background-img.mp4";

const RechercheDossier = () => {  
    const [dossiers , setDossiers] = useState([]) ; 
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false); 
    const [query,setQuery] = useState(""); 
    const [searchTerm,setsearchTearm]=useState(""); 
    const componentRef=useRef () ; 
   
   
    const handlePrint = useReactToPrint ({ 
      content : () => componentRef.current , 
      onAfterPrint: ()=> alert('Print sucess') ,
    }) ; 
    
    
    

    const OnDelete = (id) => {  
        if(window.confirm("Are you sure to delete this Dossier ? ")) {  
            console.log('Noo')
          axios.delete(`/api/dossiers/${id}`)  
          
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
         axios.get('/api/dossiers') 
         .then (res=> {  
            setDossiers(res.data)

         });

    },[])

    return ( 


<div className='app'>  
        <video autoPlay loop muted>
<source src={bgImage} type="video/mp4" />
</video> 
<>
        <div ref={componentRef} style={{width:'100%', height: window.innerHeight}} >
  
            <div className='page'> 
            <header id="header">
    <nav>
        <div class="container" >
            <div class="text-center">
                <a href="/" class="nav-brand text-dark">Liste des Dossiers</a>
            </div>
        </div>
    </nav> 
    </header> 
   <main id="site-main"> 
       <div class="container">  
         
           <form action="/" method="POST"> 
           {/*<div ref={el=>(this.componentRef=el)}> */}
               <table class="table">
                   <thead class="thead-dark">
                       <tr> 
                           
                           <th>Num d'affaire</th>
                           <th>Emplacement</th> 
                           <th>Client</th>  
                            <th>Tel</th> 
                            <th>Mission</th> 
                            <th>Adversaire</th> 
                    
                           <th>Action</th>
                           
                           
                       </tr>
                   </thead>
            <tbody>  
                
            {  
   dossiers.map(({Num , emplacement,Clients, Tel,Mission, Nom, Reste,CIIN,Types,Code,Activite,type,Lieu,Service,Observation,Registre,Adresse, AdresseD,Avocat, AdresseA,CIN, ActiviteC,TelC,Part, CodeD,_id}) => (
   <DossiersShow Num={Num} emplacement={emplacement} Clients={Clients} Tel={Tel} Mission={Mission} Nom={Nom} Reste={Reste} CodeD={CodeD} ID={_id}  
   CIIN={CIIN} Types={Types} Code={Code} Activite={Activite} type={type} Lieu={Lieu} Service={Service} Observation={Observation} Registre={Registre} 
   Adresse={Adresse} AdresseD={AdresseD} Avocat={Avocat} AdresseA={AdresseA} TelC={TelC} ActiviteC={ActiviteC} CIN={CIN} Part={Part}
   
   OnDelete={OnDelete} />
   )) 
}
        
        
      
        
            
            </tbody>
               </table>  
        
               
           </form> 
           <div class="box-nav d-flex justify-between">
              <a href="/Tache" class="border-shadow">
                <span class="text-gradient">Ajouter Tache</span>
              </a>  
              <a href="/CreatePost/Tache/Reclasser" class="border-shadow">
                <span class="text-gradient">Reclasser Dossier</span>
              </a>  
              <a href="/AddHonoraire" class="border-shadow">
                <span class="text-gradient">Générer Facture</span>
              </a>  
              <a href="/AddHonoraire" class="border-shadow">
                <span class="text-gradient">Générer Facture Etat</span>
              </a>  
              <a href="/AddHonoraire" class="border-shadow">
  <span class="text-gradient">Archiver Dossier</span>
</a>  
{/*<a href="/AddHonoraire" class="border-shadow">
  <span class="text-gradient" onClick={handlePrint}>Imprimer Liste</span>
</a>    */} 
<div class="border-shadow"> 
<button class="text-gradient" onClick={handlePrint}> Imprimer Liste</button>
 </div>

            </div>
       </div>
   </main>




            </div>
        </div> 

        </>
        </div>
    );
};

export default RechercheDossier;