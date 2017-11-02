var path =require ('path');
var express = require ('express');
var app = express ();
var bodyParser = require('body-parser');
var clientPath = path.join(__dirname ,'../client');
var mysql = require ('mysql');
var path =require ('path');


app.use(express.static(clientPath));



app.listen(3000)
