'use strict';

const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
    },
  trails: {
    type: Schema.Types.ObjectId,
    ref: 'Trail'
    }
  },
  {
  toJSON: { virtuals: true },
  });

const State = mongoose.model('State', stateSchema);

module.exports = State;
