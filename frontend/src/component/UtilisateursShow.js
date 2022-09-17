import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom'


function UtilisateursShow({Email, Password, Domaine , ID, OnDelete}) { 



  
  return (
     
        <tr> 
            
            <td>{Email}</td>
            <td>{Password}</td> 
            <td>{Domaine}</td> 
            
             <td>
                <Link to={`/utilisateur/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
        </tr>
    
  )
}

export default UtilisateursShow ;
