const bodyParser = require('body-parser');
const consign = require('consign');
const path = require('path');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join('./', 'views')));

// Middleware to allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


consign()
    .include('models')
    .then('routes')
    .into(app);

module.exports = app;