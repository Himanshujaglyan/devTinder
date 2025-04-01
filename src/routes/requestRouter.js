const express = require("express");
const requestRouter = express.Router();
const userauth = require("../Middleware/auth")


//Connection Request
requestRouter.post("/sendConnectionRequest" ,userauth, (req,res)=>{
    const userName = req.user.firstName; 
    res.send(userName + " Sending a connection request!")
})


module.exports = requestRouter;