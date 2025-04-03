const express = require("express");
const userRouter = express.Router();
const {userauth} = require("../Middleware/auth");

userRouter.get("/user.request" , userauth , (req,res)=>{
    try{
        const loggedInuser = req.user;

    }   
    catch(err){
        res.status(400).send("ERROR : "+ err.message);
    }
})

module.exports = userRouter;