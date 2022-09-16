const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DossierSchema = new Schema({
    Num: String,
    emplacement : String, 
    Clients : String, 
    Tel: String, 
    Mission: String , 
    Adversaire: String, 
    Reste: String , 
    Lieu: String,  
    Service: String,  
    Observation: String , 
    Types : String , 
    CIIN: String,  
    type: String, 
    Code: String ,  
    Activite: String , 
    CodeD : String , 
    Nom : String , 
    AdresseD : String , 
    Adresse : String , 
    AdresseA : String , 
    Avocat : String , 
    Registre : String , 
    CodeC: String , 
    NomC: String , 
    CIN: String , 
    ActiviteC: String,   
    TelC: String, 
    Part:String,
    Pourcentage: String, 
    Forfait: String, 





    
    
    
}, {timestamps: true})




module.exports = mongoose.model('dossiers', DossierSchema)