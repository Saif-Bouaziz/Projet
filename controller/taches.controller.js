const taches= require('../models/taches.models')


const AddTaches = async (req,res) => {   
    try{  
            await taches.create(req.body) 
            res.status(201).json({message: 'Tache added with sucess'})
    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllTaches = async (req,res) => { 
    try{  
        const data= await taches.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSingleTaches= async (req,res) => { 
    try{ 
        const data= await taches.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateTaches= async (req,res) => {  
    try{   
        const data= await taches.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
} 

const DeleteTaches = async (req,res) => { 
    try{ 
        const data= await taches.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddTaches,
    FindAllTaches,
    FindSingleTaches,
    UpdateTaches,
    DeleteTaches,
  };