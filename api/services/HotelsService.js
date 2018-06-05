'use strict';

const Hotel = require('../models/hotel');

module.exports = {
  /**
   * @description Gets the Hotels lists given the selected filters
   * @param {*} filters
   */
  getHotels(filters) {
    let query = {};
    if (filters.name) {
        query.name = { $regex: filters.name, $options: 'i' }
    }
    if (filters.stars) {
        query.stars = { $in: filters.stars.split(',').map(Number) }
    }
    return Hotel.find(query);
  }
}
