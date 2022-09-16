const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParametreSchema = new Schema({
    Parametre: String,
    Valeur : String,
    
    
    
}, {timestamps: true})




module.exports = mongoose.model('parametres', ParametreSchema)