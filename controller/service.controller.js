const service = require('../models/service.models')



const AddService = async (req, res) => {
    try {


        await service.create(req.body)
        res.status(201).json({ message: 'User added with sucess' })





    } catch (error) {
        console.log(error.message)
    }

}

const FindAllService = async (req, res) => {
    try {

        const data = await service.find()
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const FindSinglService = async (req, res) => {
    try {
        const data = await service.findOne({ _id: req.params.id })
        res.status(201).json(data)
    } catch (error) {
        console.log(error.message)
    }

}

const UpdateService = async (req, res) => {
    try {

        const data = await service.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        );
        res.status(201).json(data);

    } catch (error) {
        console.log(error.message)
    }



}

const DeleteService = async (req, res) => {
    try {
        const data = await service.deleteOne({ _id: req.params.id })
        res.status(201).json({ message: "User deleted with success" })
    } catch (error) {
        console.log(error.message)
    }


}
module.exports = {
    AddService,
    FindAllService,
    FindSinglService,
    UpdateService,
    DeleteService,
};