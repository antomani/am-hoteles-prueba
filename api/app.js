'use strict';

const mongoose = require('mongoose');
const app = require('./config/express');
const config = require('./config/env');
const hotels = require('./data');
const Hotel = require('./models/hotel');
const _ = require('lodash');


mongoose.connect(config.db, () => {
  mongoose.connection.db.dropDatabase();
  _.forEach(hotels, (hotel, key) => {
    new Hotel(hotel).save();
  });
});

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.db}`);
});
mongoose.connection.on('connected', () => {
  console.log(`Connected to database: ${config.db}`);
});

app.listen(config.port, () => {
  console.log(`API Server corriendo en el puerto ${config.port} (${config.env})`);
});

module.exports = app;
