const express = require('express');
const app = express();
const scrapper = require('./scrapper.js');

app.use('/', (req,res,next) => {
    console.log(req.path)
    next();
})

app.get('/', (req, res) => {
    scrapper.then(arr => res.send(JSON.stringify(arr)))
})

app.listen(3000)