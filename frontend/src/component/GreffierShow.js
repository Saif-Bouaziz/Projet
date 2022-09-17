import React from 'react' 
import axios from 'axios'; 
import { Link } from 'react-router-dom'


function GreffierShow({nom, date, adresse, etat, nombre, payement, cin, tel, cnss, contrat, sexe, actif, ID, OnDelete}) { 



  
  return (
     
        <tr> 
            
            <td>{nom}</td>
            <td>{date}</td>
            <td>{adresse}</td>
            <td>{etat}</td>
            <td>{nombre}</td>
            <td>{payement}</td>
            <td>{cin}</td>
            <td>{tel}</td>
            <td>{cnss}</td>
            <td>{contrat}</td>
            <td>{sexe}</td>
            <td>{actif}</td>
             <td>
                <Link to={`/greffier/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
        </tr>
    
  )
}

export default GreffierShow ;