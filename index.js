const express = require('express');

const app = express();

let port = process.env.PORT || 3000;

const importData = require('./tourism_api.json');

app.get("/",(req,res) => {
    res.end("hello world");

});

app.get("/tourismApi",(req,res)=>{
    res.send(importData);
});

app.listen(port,() =>{
    console.log(`Example app is listen on port http://localhost:${port}`);
});