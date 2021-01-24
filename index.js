const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
require('dotenv').config();

const PORT = process.env.PORT || 3000

//connect to mongodb atlas

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(() => {
 console.log("connected to mongodb")
}).catch(error => {
    console.log("something wrong happenend",error);
});

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});

app.get('/posts', (req,res) => {
    res.send('We are on post');
});


//How do we  start listening to the server 
app.listen(PORT, () => {
    console.log('server is listening on port 3000');
});