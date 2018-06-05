const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes/index');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', routes);

app.use((err, req, res, next) => {
  if (err) {
    res.status(err.status).json(err);
  } else {
    res.status(500)
      .json({
        status: err.status,
        message: err.message
      });
  }
});

module.exports = app;
