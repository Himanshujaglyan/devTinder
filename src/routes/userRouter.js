const express = require("express");
const userRouter = express.Router();
const {userauth} = require("../Middleware/auth");
const ConnectionRequests = require("../models/ConnectionRequest")

userRouter.get("/user.request" , userauth , async(req,res)=>{
    try{
        const loggedInuser = req.user;
        
        const connectionRequests = await ConnectionRequests.find({
            toUserId : loggedInuser._id,
            status :"interested",
        }).populate("fromuserId",["firstName", "lastName"]);

        res.json({
            message:"Data fetched successfully",
            data: connectionRequests,
        })
    }   
    catch(err){
        res.status(400).send("ERROR : "+ err.message);
    }
})


userRouter.get("/user/connections" , userauth , async(req,res)=>{
    try{
        const loggedUser = req.user;
        const connectionRequests = await ConnectionRequests.find({
            $or:[
             { touserId : loggedUser._id,status:"accepted"},
            { fromuserId: loggedUser._id , status: "accepted"},   
            ],
        }).populate("fromuserId",["firstName", "lastName"] )
          .populate("touserId",["firstName", "lastName"])


        const data = connectionRequests.map((row)=> {
            if(row.fromuserId._id.toString() === loggedUser._id.toString()){
                return row.touserId;
            }
            return row.fromuserId;
        });
        res.json({data});
    }
    catch(err){
        res.status(400).send({message: err.message});
    }
})

module.exports = userRouter;