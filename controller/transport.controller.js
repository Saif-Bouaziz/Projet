const transport= require('../models/transport.models')



const AddTransport= async (req,res) => {   
    try{  
        
         
            await transport.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        
          
          

    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllTransport = async (req,res) => { 
    try{  
        
        const data= await transport.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglTransport = async (req,res) => { 
    try{ 
        const data= await transport.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateTransport = async (req,res) => {  
    try{   
         
        const data= await transport.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
  
    

} 

const DeleteTransport = async (req,res) => { 
    try{ 
        const data= await transport.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddTransport,
    FindAllTransport,
    FindSinglTransport,
    UpdateTransport,
    DeleteTransport,
  };