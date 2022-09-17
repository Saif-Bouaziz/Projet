import React from 'react'
import { Link } from 'react-router-dom'
const Table = ({data,ID,OnDelete}) => {
  return (
   
    <table class="table">
        <thead class="thead-dark">
        <tr>
            
        <th>collaborateur</th>
        <th>raison sociale</th>
        <th>matricule</th>
        <th>ville</th>
         <th>rue</th>
        <th>num</th>
        <th>code postale</th>
         <th>activité</th>
        <th>situation fiscale</th>
         <th>action</th>

        </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>(
                <tr key={item.id}>
                   <td>{item.collaborateur}</td>
                   <td>{item.raison}</td>
                   <td>{item.matricule}</td>
                   <td>{item.ville}</td>
                   <td>{item.rue}</td>
                   <td>{item.num}</td>
                   <td>{item.postale}</td>
                   <td>{item.activite}</td>
                   <td>{item.situation}</td>
                   <td>
                <Link to={`/gestion_client/${ID}`} class="btn border-shadow update">
                 <span class="text-gradient"><i class="fas fa-pencil-alt"></i></span>
                 </Link>
                 <a class="btn border-shadow delete" data-id>
                <span class="text-gradient" onClick={()=>OnDelete(ID)}><i class="fas fa-times"></i></span>
                 </a>
             </td>
                  
                </tr>
            ))
          }
        </tbody>
  </table>
  )
}

export default Table
