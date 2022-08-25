const express = require('express');
const app = express();
const path = require('path');
const config = require('dotenv').config();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

app.get('/', (req , res) => {
    res.sendStatus(200);
});



app.get('/images', (req , res) => {
res.sendFile(path.join("./json/" , 'images.json'));
});

app.listen(port);
console.log(`Sucessfully started Running on port ${port}`);