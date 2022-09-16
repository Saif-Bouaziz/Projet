const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrimeSchema = new Schema({
    Libelle: String,
    Montant : String,
    Dissociable: String,
    Impot: String, 
    Mensuel: String
}, {timestamps: true})




module.exports = mongoose.model('primes', PrimeSchema)