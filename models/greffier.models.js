const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GreffierSchema = new Schema({
    nom: String,
    date: String,
    adresse: String,
    etat: String,
    nombre: String,
    payement: String,
    cin: String,
    tel: String,
    cnss: String,
    contrat: String,
    sexe: String,
    actif: String,
   
}, {timestamps: true})




module.exports = mongoose.model('greffier', GreffierSchema)