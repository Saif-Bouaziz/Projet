const recette= require('../models/recette.models')
//const ValidateUser = require('../validation/users.validation')


const AddRecette = async (req,res) => {   
    //const { errors, isValid } = ValidateUser(req.body);
    try{  
       /* if(!isValid) { 
            res.status(404).json(errors);
        }  
        else {  
            await Timbre.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        }*/
        await recette.create(req.body) 
        res.status(201).json({message: 'User added with sucess'})   
          

    } catch(error) { 
        console.log(error.message)
    }

} 

const FindAllRecette = async (req,res) => { 
    try{  
        
        const data= await recette.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglRecette = async (req,res) => { 
    try{ 
        const data= await recette.findOne({_id: req.params.id})
        res.status(201).json(data);
  }catch(error) { 
    console.log(error.message)
}

} 

const UpdateRecette = async (req,res) => {  
    try{  
        const data= await recette.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data);
        
      /*  const { errors, isValid } = ValidateUser(req.body);
        if(!isValid) { 
            res.status(404).json(errors);
        }  else {
        const data= await Timbre.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               }*/
  } 
  catch(error) { 
    console.log(error.message)
}
    

} 

const DeleteRecette = async (req,res) => { 
    try{ 
        const data= await recette.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddRecette,
    FindAllRecette,
    FindSinglRecette,
    UpdateRecette,
    DeleteRecette,
  };