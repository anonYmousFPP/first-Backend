const express = require("express");
const app = express();
require('dotenv').config()

// app.json();

const port = 3000;

app.get("/", function(req, res){
    res.send("<h1>Welcome to Homepage</h1>");  
})
app.get("/login", function(req, res){
    res.send("<h2>Login with your email and password</h2>");  
})
app.get("/contact", function(req, res){
    res.send("<h2>Contact Me: abhay14122001@gmail.com</h2>");  
})

app.listen(process.env.PORT, ()=>{//now this backend run on the free port depend on the browser(after hosting)
    console.log(`Example app listening on port ${port}`)
});
