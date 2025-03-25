const express = require('express');
const app = express();
const {adminauth,userauth} = require("./Middleware/auth")
// app.get("/user", (req,res)=>{
//     console.log(req.query)
//     res.send({"Name":"Himanshu","age":"21"})
// })
// app.post("/user",(req,res)=>{
    
//     res.send("Data successfully saved to the DB")
// })
// app.delete("/user",(req,res)=>{
//     res.send("Deleted succesfully");
// })
// app.use("/test", (req, res) => {
//     res.send("This is the / Route");
// });
// -------------------------------------------------------------------
//Multiple Route Handlers
// app.use("/test",(req,res,next)=>{
//     //request Handler
//     console.log("Response 1")
//     // res.send("This is the resposnse 1")
//     next();
// },
// (req,res)=>{
//     console.log("Response 2")
//     res.send("This is the response 2")
// })

//Thats why we use middleware because it helps us to write less or don't repeat the code
//So here below is the middle ware which handle authetication for both getalldata and deleteuser
// app.use("/admin",adminauth)

// app.use("/user",userauth,(req,res)=>{
//     res.send("Welcome to user");
// })

// app.use("/admin/getalldata", (req,res)=>{
//     res.send("Welcome data is here!")
// })
// app.use("/admin/deleteuser", (req,res)=>{
//     res.send("Successfully deleted the user!!")
// })

//------------------------Handling Error------------------------
app.use("/",(err,req,res)=>{
    if(err){
        res.status(500).send("Something went wrong!")
    }
})



app.listen(3000,()=>{
    console.log("Server is successfuly listening on port 3000......")
});
