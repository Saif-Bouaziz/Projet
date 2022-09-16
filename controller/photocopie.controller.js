const photocopie= require('../models/photocopie.models')



const AddPhotocopie= async (req,res) => {   
    try{  
        
         
            await photocopie.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        
          
          

    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllPhotocopie = async (req,res) => { 
    try{  
        
        const data= await photocopie.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglPhotocopie = async (req,res) => { 
    try{ 
        const data= await photocopie.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdatePhotocopie = async (req,res) => {  
    try{   
         
        const data= await photocopie.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
  
    

} 

const DeletePhotocopie = async (req,res) => { 
    try{ 
        const data= await photocopie.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddPhotocopie,
    FindAllPhotocopie,
    FindSinglPhotocopie,
    UpdatePhotocopie,
    DeletePhotocopie,
  };