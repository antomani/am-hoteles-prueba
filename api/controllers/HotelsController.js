'use strict';

const Joi = require('joi');
const HotelsService = require('../services/HotelsService');

const hotelsSchema = Joi.object().keys({
    name: Joi.string(),
    stars: Joi.string().regex(/^\d[,?\d]*?$/)
  });

module.exports = {
  getHotels: function (req, res) {
    Joi.validate(req.query, hotelsSchema)
      .then(() => {
        return HotelsService.getHotels(req.query);
      })
      .then((result) => {
        return res.status(200).json(result);
      })
      .catch((error) => {
        console.log(error);
        if (error.isJoi) {
          res.status(400).send('Bad Request');
        }
        res.status(500).send('Something broke');
      });
  }
}
