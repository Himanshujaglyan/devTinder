const express = require('express');
const app = express();

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


app.listen(3000,()=>{
    console.log("Server is successfuly listening on port 3000......")
});
