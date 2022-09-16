const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecetteSchema = new Schema({
    libelle: String,
    montant : String,
}, {timestamps: true})




module.exports = mongoose.model('recette', RecetteSchema)