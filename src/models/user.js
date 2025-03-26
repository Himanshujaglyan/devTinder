const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        tupe: String
    },
    emailId:{
        type: String
    },
    password:{
        type: String
    },
    age:{
        type : Number
    }
})

const User = mongoose.model("user",userschema);

module.exports = User;