var express = require('express');
var path = require('path');
var app = express();

var clientPath = path.join(__dirname, "../client");

app.use(express.static(clientPath));



app.listen(3000, function(){
    console.log('Yup, listenin');
})