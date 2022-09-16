const honoraires= require('../models/honoraires.models')


const AddHonoraire = async (req,res) => {   
    try{  
            await honoraires.create(req.body) 
            res.status(201).json({message: 'Honoraire added with sucess'})
    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllHonoraire = async (req,res) => { 
    try{  
        const data= await honoraires.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSingleHonoraire= async (req,res) => { 
    try{ 
        const data= await honoraires.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateHonoraire = async (req,res) => {  
    try{   
        const data= await honoraires.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
} 

const DeleteHonoraire = async (req,res) => { 
    try{ 
        const data= await honoraires.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddHonoraire,
    FindAllHonoraire,
    FindSingleHonoraire,
    UpdateHonoraire,
    DeleteHonoraire,
  };