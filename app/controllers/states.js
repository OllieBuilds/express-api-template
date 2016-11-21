'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const State = models.state;

const index = (req, res, next) => {
  State.find()
    .then(states => res.json({states}))
    .catch(err => next(err));
};

module.exports = controller({
  index,
});
