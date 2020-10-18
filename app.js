const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer")


const startPageRouter = require('./routes/startPage');
// mongoose.connect('mongodb://localhost:27017/party', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', startPageRouter);

module.exports = app;
