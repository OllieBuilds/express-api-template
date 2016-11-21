'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const State = models.state;

const index = (req, res, next) => {
  State.find()
    .then(states => res.json({states}))
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let state = req.body.state;
  console.log(state);
  State.create(state)
    .then(state => res.json({ state }))
    .catch(err => next(err));
};

const populateStateTrails = (req, res, next ) => {
  State.findById(req.params.id)
  .then(state => {
    if(!state) {
      return next();
    }
    return state.update({$push: {trails: req.body.trails}})
      .then(() => res.sendStatus(200));
  })
  .catch(err => next(err));
};

module.exports = controller({
  index,
  create,
  populateStateTrails,
});
