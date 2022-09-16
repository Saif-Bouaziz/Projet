const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollaborateurSchema = new Schema({
    Nom: String, 
    Cin: String , 
    Ville: String, 
    Rue:String, 
    Num:String, 
    Code: String , 
    Activite: String, 
    Tel: String, 
    Fax : String , 
    Email: String, 
    Montant : String
    
    
    
}, {timestamps: true})




module.exports = mongoose.model('collaborateurs', CollaborateurSchema)