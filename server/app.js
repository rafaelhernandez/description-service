const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const roomsRouter = require('./rooms-router.js');
const apiRouter = require('./api-router.js');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/rooms', apiRouter);
app.use('/rooms', roomsRouter);

app.use(express.static(path.resolve('public')));

app.get('/', (req, res, next) => res.sendFile('index.html', {root: path.resolve('public')}));

app.get('*', (req, res, next) => res.sendStatus(404));
app.use((err, req, res, next) => res.sendStatus(500));

module.exports = app;
