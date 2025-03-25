 const adminauth = (req,res,next)=>{
    const token = "xyz";
    const isAuthenticate = token === "xyz";
    if(!isAuthenticate){
        console.log("no ")
        res.status(401).send("Your are not a valid user!!");
    }else{
        next();
    }
}
 const userauth = (req,res,next)=>{
    const token = "xyz";
    const isAuthenticate = token === "xyz";
    if(!isAuthenticate){
        console.log("no ")
        res.status(401).send("Your are not a valid user!!");
    }else{
        next();
    }
}
module.exports={adminauth,userauth}