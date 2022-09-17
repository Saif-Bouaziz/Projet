import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom'


function HonorairesShow({Libelle, Libelle_Français, Montant,ID, OnDelete}) { 



  
  return (
     
        <tr> 
            
            <td>{Libelle}</td>
            <td>{Libelle_Français}</td> 
            <td>{Montant}</td>  
            
             <td>
                <Link to={`/honoraires/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
        </tr>
    
  )
}

export default HonorairesShow ;
