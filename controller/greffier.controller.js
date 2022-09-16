const greffier= require('../models/greffier.models')



const AddGreffier= async (req,res) => {   
    try{  
        
         
            await greffier.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        
          
          

    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllGreffier = async (req,res) => { 
    try{  
        
        const data= await greffier.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglGreffier = async (req,res) => { 
    try{ 
        const data= await greffier.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateGreffier = async (req,res) => {  
    try{   
         
        const data= await greffier.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
  
    

} 

const DeleteGreffier = async (req,res) => { 
    try{ 
        const data= await greffier.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddGreffier,
    FindAllGreffier,
    FindSinglGreffier,
    UpdateGreffier,
    DeleteGreffier,
  };