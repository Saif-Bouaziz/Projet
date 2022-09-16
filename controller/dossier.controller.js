const dossiers= require('../models/dossiers.models')

const AddDossier = async (req,res) => {   
    try{  
            await dossiers.create(req.body) 
            res.status(201).json({message: 'Dossier added with sucess'})
    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllDossier = async (req,res) => { 
    try{  
        const data= await dossiers.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSingleDossier= async (req,res) => { 
    try{ 
        const data= await dossiers.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateDossier = async (req,res) => {  
    try{   
        const data= await dossiers.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
} 

const DeleteDossier = async (req,res) => { 
    try{ 
        const data= await dossiers.deleteOne({_id: req.params.id})
        res.status(201).json({message:"Dossier deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddDossier,
    FindAllDossier,
    FindSingleDossier,
    UpdateDossier,
    DeleteDossier,
  };