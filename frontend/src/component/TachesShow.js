import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom'


function TachesShow({Tache, Num, Client,ID,Personne,Resolu, OnDelete}) { 



  
  return (
     
        <tr> 
            <td>{Num}</td>  
            <td>{Client}</td> 
            <td>{Tache}</td> 
            <td>{Personne}</td> 
            <td>{Resolu}</td>
          
             
            
             <td>
                <Link to={`/UpdateTache/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
        </tr>
    
  )
}

export default TachesShow ;
