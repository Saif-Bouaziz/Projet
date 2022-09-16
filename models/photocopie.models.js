const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotocopieSchema = new Schema({
    montant: String,
   
}, {timestamps: true})




module.exports = mongoose.model('photocopie', PhotocopieSchema)