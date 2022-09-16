const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TacheSchema = new Schema({
    Tache: String, 
    Num : String , 
    Client: String ,   
    Personne : String , 
    Resolu : String ,
    
    
    
    
    
}, {timestamps: true})




module.exports = mongoose.model('taches', TacheSchema)