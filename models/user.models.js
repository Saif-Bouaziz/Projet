const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');
const Joi=require('joi');
const passwordComplexity = require("joi-password-complexity");


const userSchema = new mongoose.Schema({
    lname: {type:String,required:true},
    fname: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    
    
    
});

userSchema.methods.generateAuthToken=function(){
    const token = jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
    });
    return token;
};

const User=mongoose.model("user",userSchema);
const validate=(data)=>{
    const schema=Joi.object({
        lname:Joi.string().required().label("last name"),
        fname:Joi.string().required().label("first name"),
        email:Joi.string().email().required().label("email"),
        password: Joi.string().required().label("password")
    });
    return schema.validate(data);
};

module.exports ={ User,validate};