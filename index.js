const express = require('express');
const app = express();
const port = 5000;

//connect DB
const db = require('./config/mongoose');

//to read the form data
app.use(express.urlencoded({ extended: true }));

//to use routes and perform action
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})