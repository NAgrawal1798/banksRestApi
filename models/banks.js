const mongoose = require('mongoose');

//BANKS SCHEMA
const BankSchema = new mongoose.Schema({
    ifsc: {
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    bank_id:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
    },
    address:{
        type:String,
        required:true,
        minlength:5,
        maxlength:250,
    },
    city:{
        type:String,
        required:true,
        minlength:5,
        maxlength:150,
    },
    district:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
    },
    state:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50,
    },
    bank_name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:150,
    }



});

module.exports = new mongoose.model('Bank', BankSchema);
