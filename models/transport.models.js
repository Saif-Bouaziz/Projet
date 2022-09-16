const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransportSchema = new Schema({
    montant: String,
   
}, {timestamps: true})




module.exports = mongoose.model('transport', TransportSchema)