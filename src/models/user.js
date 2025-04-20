const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    firstName:{
        type: String,
        // required : true,
    },
    lastName:{
        type: String
    },
    emailId:{
        type: String,
        required:true,
        // validator(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Invalid email address : " + value)
        //     }
        // }
    },
    password:{
        type: String
    },
    fatherName:{
        type: String ,
        // required:true
    },
    age:{
        type : Number
    },
    about:{
        type:String,
        default:"This is the default about!!"
    },
    gender:{
        type: String
    },
    profileImage:{
        type:String,
    }
    
},{
    timestamps:true
})

const User = mongoose.model("user",userschema);

module.exports = User;