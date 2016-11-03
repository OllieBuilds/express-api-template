'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Trail = models.trail;

const index = (req, res, next) => {
  Trail.find()
    .then(trails => res.json({trails}))
    .catch(err => next(err));
};

const showById = (req, res, next) => {
  console.log(req.params.id+"console logging id");
  Trail.findById(req.params.id)
  .then(trail => trail ? res.json({ trail }) : next())
  .catch(err => next(err));
};

const create = (req, res, next) => {
  let trail = req.body.trail;
  Trail.create(trail)
    .then(trail => res.json({ trail }))
    .catch(err => next(err));
};

const showByName = (req, res, next) => {
  console.log(req.body+"::::BODY");
  Trail.find({
    'name': req.body.name
  })
  .then(trail => trail ? res.json({ trail }) : next())
  .catch(err => next(err));
};

const destroy = (req, res, next) => {
  // let search = {id: req.params.id};
  Trail.findById(req.params.id)
    .then(trail => {
      if(!trail) {
        return next();
      }

      return trail.remove()
        .then( () => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const updateRating = (req, res, next) => {
  Trail.findById(req.params.id)
    .then(trail => {
      if (!trail) {
        return next();
      }
      console.log(trail.rating.length);
      return trail.update({$push: {rating: req.body.rating}})
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  create,
  showById,
  showByName,
  destroy,
  updateRating,
});
