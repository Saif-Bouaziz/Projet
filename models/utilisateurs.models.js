const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UtilisateurSchema = new Schema({
    Email: String,
    Password : String,
    Domaine: String,
    
}, {timestamps: true})




module.exports = mongoose.model('utilisateurs', UtilisateurSchema)