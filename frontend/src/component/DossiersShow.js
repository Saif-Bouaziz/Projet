import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom' 
import DossiersFenetres from './DossiersFenetres' 






function DossiersShow({Num , emplacement,Clients, Tel,Mission, Nom, Reste,CIIN,Types,Code,Activite,type,Lieu,Service,Observation,Registre,Adresse, AdresseD,Avocat, AdresseA, CodeD,ID,CIN, ActiviteC,TelC,Part, OnDelete}) {  
   
   
   
  
  return (
     
        <tr> 
            
            <td>{Num}</td>
            <td>{emplacement}</td> 
            <td>{Clients}</td>   
            <td>{Tel}</td> 
            <td>{Mission}</td> 
            <td>{Nom}</td> 
                 

            
             <td>
                <Link to={`/recherche/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>  
                
                 <Link to={`/Info/${ID}`} state={{Num:Num, emplacement:emplacement , Clients:Clients ,Tel:Tel , Mission:Mission 
               , Nom:Nom , CIIN:CIIN , Types:Types , Code:Code ,Activite:Activite ,type:type ,Lieu:Lieu 
               ,Service:Service,Observation:Observation,Registre:Registre,Adresse:Adresse, AdresseD:AdresseD,Avocat:Avocat, AdresseA:AdresseA, CodeD:CodeD , 
               CIN:CIN, ActiviteC:ActiviteC,TelC:TelC,Part:Part
               
               }  }  class="btn border-shadow update">           
      <span class="text-gradient" ><i class="fa-solid fa-angles-right"></i></span>  
      </Link>
      </td>
 </tr> 

      
       
    
  )
}

export default DossiersShow ;
