const mongoose = require('mongoose')
const Schema = mongoose.Schema;




const TribunalSchema = new Schema({
    Tribunal: String,
})





module.exports = mongoose.model('Tribunaux', TribunalSchema)