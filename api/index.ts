
const express = require('express');
const app = express();
const  user = require('../routers/users');
const  student = require('../routers/students');

//app.use(log); //middleware usings
app.use('/api/users',user);  
app.use('/api/students',student);

//midleware creation
function log(req,res,next){
    console.log('middleware');
    next();
}


console.log(process.env.PORT);
const port = process.env.PORT || 3000;

app.listen(port,()=>console.log(`App is running on port: ${port}`));

module.exports = app;