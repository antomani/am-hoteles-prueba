'use strict'
const mongoose = require('mongoose')

const HotelSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    id: String,
    name: String,
    stars: Number,
    image: String,
    price: Number,
    amenities:  { type: Array }
});

module.exports = mongoose.model('Hotel', HotelSchema)
