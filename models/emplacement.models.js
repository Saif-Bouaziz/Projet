const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmplacementSchema = new Schema({
    libelle: String,
   
}, {timestamps: true})




module.exports = mongoose.model('emplacement', EmplacementSchema)