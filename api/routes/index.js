const routes = require('express').Router();
const HotelsController = require('../controllers/HotelsController');

routes.get('/hoteles', HotelsController.getHotels);

module.exports = routes;
