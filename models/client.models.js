const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    collaborateur: String,
    code: String,
    raison: String,
    type: String,
    situation: String,
    matricule: String,
    adressedesgine: String,
    ville: String,
    rue: String,
    num: String,
    postale: String,
    adresse: String,
    activite: String,
    tel: String,
    fax: String,
    email: String,
   
}, {timestamps: true})




module.exports = mongoose.model('client', ClientSchema)