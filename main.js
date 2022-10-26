const { application } = require('express');
const express = require('express');
const app = express();
const path = require('path');
const config = require('dotenv').config();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const files = require('./loadimages');

app.get('/',  (req , res) => {
  res.sendStatus(404);
})

app.use('/images' , express.static('images'));



app.get('/imagedata', (req , res) => {
res.sendStatus(401);
});

app.get('/imagedata/:password', (req , res) => {
res.sendFile("images.json" , { root: __dirname + '/json/'});
console.log(req.params.password);
});

const Router = require('./routes/imageRoute');

app.use('/' , Router);

app.listen(port);
console.log(`Sucessfully started Running on port ${port}`);
files.getFILES();