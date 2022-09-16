const timbre= require('../models/timbre.models')



const AddTimbre= async (req,res) => {   
    try{  
        
         
            await timbre.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        
          
          

    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllTimbre = async (req,res) => { 
    try{  
        
        const data= await timbre.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglTimbre = async (req,res) => { 
    try{ 
        const data= await timbre.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateTimbre = async (req,res) => {  
    try{   
         
        const data= await timbre.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
  
    

} 

const DeleteTimbre = async (req,res) => { 
    try{ 
        const data= await timbre.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddTimbre,
    FindAllTimbre,
    FindSinglTimbre,
    UpdateTimbre,
    DeleteTimbre,
  };