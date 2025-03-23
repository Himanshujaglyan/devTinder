const express = require('express');
const app = express();

app.use("/api", (req, res) => {
    res.send("Hello Himanshu Jaglyan");
});

app.listen(3000,()=>{
    console.log("Server is successfuly listening on port 3000......")
});
