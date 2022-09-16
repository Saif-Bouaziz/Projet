const primes= require('../models/primes.models')


const AddPrime = async (req,res) => {   
    try{  
            await primes.create(req.body) 
            res.status(201).json({message: 'Prime added with sucess'})
    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllPrime = async (req,res) => { 
    try{  
        const data= await primes.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglePrime= async (req,res) => { 
    try{ 
        const data= await primes.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdatePrime = async (req,res) => {  
    try{   
        const data= await primes.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
} 

const DeletePrime = async (req,res) => { 
    try{ 
        const data= await primes.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddPrime,
    FindAllPrime,
    FindSinglePrime,
    UpdatePrime,
    DeletePrime,
  };