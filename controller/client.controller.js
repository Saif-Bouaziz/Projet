const client= require('../models/client.models')



const AddClient= async (req,res) => {   
    try{  
        
         
            await client.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        
          
          

    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllClient = async (req,res) => { 
    try{  
        
        const data= await client.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglClient = async (req,res) => { 
    try{ 
        const data= await client.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateClient = async (req,res) => {  
    try{   
         
        const data= await client.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
  
    

} 

const DeleteClient = async (req,res) => { 
    try{ 
        const data= await client.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddClient,
    FindAllClient,
    FindSinglClient,
    UpdateClient,
    DeleteClient,
  };