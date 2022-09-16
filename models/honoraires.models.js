const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HonoraireSchema = new Schema({
    Libelle: String,
    Libelle_Français : String, 
    Montant : String
    
    
    
}, {timestamps: true})




module.exports = mongoose.model('honoraires', HonoraireSchema)