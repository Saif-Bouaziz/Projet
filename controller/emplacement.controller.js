const emplacement= require('../models/emplacement.models')



const AddEmplacement= async (req,res) => {   
    try{  
        
         
            await emplacement.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        
          
          

    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllEmplacement = async (req,res) => { 
    try{  
        
        const data= await emplacement.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglEmplacement = async (req,res) => { 
    try{ 
        const data= await emplacement.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateEmplacement = async (req,res) => {  
    try{   
         
        const data= await emplacement.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
  
    

} 

const DeleteEmplacement = async (req,res) => { 
    try{ 
        const data= await emplacement.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddEmplacement,
    FindAllEmplacement,
    FindSinglEmplacement,
    UpdateEmplacement,
    DeleteEmplacement,
  };