const express = require("express");
const mongoose = require("mongoose");
const app = express();
const myroutes = require('./Routes/index');

const bodyParser = require('body-parser');//in cmd install npm i express --save
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

mongoose.connect("mongodb+srv://root:1890alvin@cluster0.s1zt0.mongodb.net/login_signup?retryWrites=true&w=majority", 
{
useNewUrlParser:true,
useUnifiedTopology:true
}
).then(sucess=>{
    console.log("sucessfully connected to db");
    const port = 9000;
    app.listen(port,()=>{
        console.log("server is running in",port);
    });
    

}).catch(error=>{
    console.log("error in connection",error);
});

app.use('/',myroutes); 

