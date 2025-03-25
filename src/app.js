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

//Thats why we use middleware because it helps us to write less or don't repeat the code
//So here below is the middle ware which handle authetication for both getalldata and deleteuser
app.use("/admin",(req,res,next)=>{
    const token = "xyz";
    const isAuthenticate = token === "xyz";
    if(!isAuthenticate){
        console.log("no ")
        res.status(401).send("Your are not a valid user!!");
    }else{
        next();
    }
})

app.use("/admin/getalldata", (req,res)=>{
    res.send("Welcome data is here!")
})
app.use("/admin/deleteuser", (req,res)=>{
    res.send("Successfully deleted the user!!")
})

app.listen(3000,()=>{
    console.log("Server is successfuly listening on port 3000......")
});
