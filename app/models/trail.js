'use strict';

const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: false
  },
  lon: {
    type: Number,
    required: false
  },
  difficulty: {
    type: Number,
    required: false
  },
  rating: [{type: Number}],
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});



const Trail = mongoose.model('Trail', trailSchema);

module.exports = Trail;
