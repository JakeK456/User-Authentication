const express = require('express');

const accountsRouter = require('./accounts');

const app = express();

app.use('/accounts', accountsRouter);

module.exports = app;