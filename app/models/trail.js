'use strict';

const mongoose = require('mongoose');

const trailSchema = new mongoose.Schema({
  city: {
    type: String
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  lat: {
    type: Number
  },
  lon: {
    type: Number,
  },
  description: {
    type: String,
  },
  date_created: {
    type: String,
  },
  url: {
    type: String,
  },
  activities: [{type: Number}],
  difficulty: [{type: Number}],
  rating: [{type: Number}],
},
 {
  timestamps: true,
  toJSON: { virtuals: true },
});



const Trail = mongoose.model('Trail', trailSchema);

module.exports = Trail;
