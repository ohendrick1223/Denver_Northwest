'use strict';
require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const knex = require('knex');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



const neighborhoods = require('./routes/neighborhoods');
app.use('/neighborhoods', neighborhoods);

const landmarks = require('./routes/landmarks');
app.use('/landmarks', landmarks);

const sendgrid = require('./routes/sendgrid');
app.use('/sendgrid', sendgrid);

app.use(express.static(path.join(__dirname, 'public')));

app.use('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'public')
  });
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
  console.log('Listening on port', port);
});

module.exports = app;
