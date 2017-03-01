var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app     = express();
var router = require('./services/router');

mongoose.connect('mongodb://localhost:tripgang/tripgang');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use("/v1", router);
var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '127.0.0.1';
app.listen(PORT, HOST);