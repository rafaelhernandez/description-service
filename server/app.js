const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const roomsRouter = require('./rooms-router.js');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/airbnb_descriptions');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/rooms', roomsRouter);

app.use(express.static(path.resolve('public')));

app.get('/', (req, res, next) => res.sendFile('public/index.html'));

app.get('*', (req, res, next) => res.sendStatus(404));
app.use((err, req, res, next) => res.sendStatus(500));

module.exports = app;
