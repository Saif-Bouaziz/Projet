import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom'


function PrimesShow({Libelle, Montant, Dissociable , Impot,Mensuel,ID, OnDelete}) { 



  
  return (
     
        <tr> 
            
            <td>{Libelle}</td>
            <td>{Montant}</td> 
            <td>{Dissociable}</td>  
            <td>{Impot}</td> 
            <td>{Mensuel}</td>
            
             <td>
                <Link to={`/prime/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
        </tr>
    
  )
}

export default PrimesShow ;
