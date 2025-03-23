const express = require('express');
const app = express();

app.get("/user", (req,res)=>{
    res.send({"Name":"Himanshu","age":"21"})
})
app.post("/user",(req,res)=>{
    console.log("This is the post request means you post your data !!")
    res.send("Data successfully saved to the DB")
})
app.delete("/user",(req,res)=>{
    res.send("Deleted succesfully");
})
app.use("/test", (req, res) => {
    res.send("This is the / Route");
});




app.listen(3000,()=>{
    console.log("Server is successfuly listening on port 3000......")
});
