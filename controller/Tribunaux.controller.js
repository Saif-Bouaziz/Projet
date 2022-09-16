const Tribunaux = require('../models/Tribunaux.models')



const AddTribunal = async (req, res) => {
    try {


        await Tribunaux.create(req.body)
        res.status(201).json({ message: 'User added with sucess' })





    } catch (error) {
        console.log(error.message)
    }

}

const FindAllTribunaux = async (req, res) => {
    try {

        const data = await Tribunaux.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const FindSingleTribunal = async (req, res) => {
    try {
        const data = await Tribunaux.findOne({ _id: req.params.id })
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const UpdateTribunal = async (req, res) => {
    try {

        const data = await Tribunaux.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.status(201).json(data);

    } catch (error) {
        console.log(error.message)
    }



}

const DeleteTribunal = async (req, res) => {
    try {
        const data = await Tribunaux.deleteOne({ _id: req.params.id })
        res.status(201).json({ message: "User deleted with success" })
    } catch (error) {
        console.log(error.message)
    }


}
module.exports = {
    AddTribunal,
    FindAllTribunaux,
    FindSingleTribunal,
    UpdateTribunal,
    DeleteTribunal
};