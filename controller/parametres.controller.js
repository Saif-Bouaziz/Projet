const parametres= require('../models/parametres.models')


const AddParametre = async (req,res) => {   
    try{  
            await parametres.create(req.body) 
            res.status(201).json({message: 'Parametre added with sucess'})
    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllParametre = async (req,res) => { 
    try{  
        const data= await parametres.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSingleParametre= async (req,res) => { 
    try{ 
        const data= await parametres.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateParametre = async (req,res) => {  
    try{   
        const data= await parametres.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
} 

const DeleteParametre = async (req,res) => { 
    try{ 
        const data= await parametres.deleteOne({_id: req.params.id})
        res.status(201).json({message:"Parametre deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddParametre,
    FindAllParametre,
    FindSingleParametre,
    UpdateParametre,
    DeleteParametre,
  };