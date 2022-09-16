const utilisateurs= require('../models/utilisateurs.models')


const AddUtilisateurs = async (req,res) => {   
    try{  
            await utilisateurs.create(req.body) 
            res.status(201).json({message: 'Utilisateur added with sucess'})
    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllUtilisateurs = async (req,res) => { 
    try{  
        const data= await utilisateurs.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSingleUtilisateurs= async (req,res) => { 
    try{ 
        const data= await utilisateurs.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateUtilisateurs = async (req,res) => {  
    try{   
        const data= await utilisateurs.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
} 

const DeleteUtilisateurs = async (req,res) => { 
    try{ 
        const data= await utilisateurs.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddUtilisateurs,
    FindAllUtilisateurs,
    FindSingleUtilisateurs,
    UpdateUtilisateurs,
    DeleteUtilisateurs,
  };