import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom'


function CollaborateursShow({Nom, Cin,Ville,Rue,Num,Code,Activite,Tel, Fax,Email,Montant,ID, OnDelete}) { 



  
  return (
     
        <tr> 
            
            <td>{Nom}</td>
            <td>{Cin}</td> 
            <td>{Ville}</td>  
            <td>{Rue}</td> 
            <td>{Num}</td> 
            <td>{Code}</td> 
            <td>{Activite}</td> 
            <td>{Tel}</td> 
            <td>{Fax}</td> 
            <td>{Email}</td> 

            <td>{Montant}</td>  
            
             <td>
                <Link to={`/collaborateur/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
        </tr>
    
  )
}

export default CollaborateursShow ;
