const collaborateurs= require('../models/collaborateurs.models')


const AddCollaborateur = async (req,res) => {   
    try{  
            await collaborateurs.create(req.body) 
            res.status(201).json({message: 'Collaborateur added with sucess'})
    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllCollaborateur = async (req,res) => { 
    try{  
        const data= await collaborateurs.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSingleCollaborateur= async (req,res) => { 
    try{ 
        const data= await collaborateurs.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateCollaborateur= async (req,res) => {  
    try{   
        const data= await collaborateurs.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
} 

const DeleteCollaborateur = async (req,res) => { 
    try{ 
        const data= await collaborateurs.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddCollaborateur,
    FindAllCollaborateur,
    FindSingleCollaborateur,
    UpdateCollaborateur,
    DeleteCollaborateur,
  };