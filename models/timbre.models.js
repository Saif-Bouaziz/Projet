const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TimbreSchema = new Schema({
    libelle: String,
    montant : String,
}, {timestamps: true})




module.exports = mongoose.model('timbre', TimbreSchema)