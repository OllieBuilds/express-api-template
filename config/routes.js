'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.post('/trails/:id', 'users#addTrail')
.resources('users', { only: ['index', 'show'] })

.get('/trails', 'trails#index')
.post('/trails', 'trails#create')
.get('/trails/:id', 'trails#showById')
.get('/trails/find/name', 'trails#showByName')
.delete('/trails/:id', 'trails#destroy')
.post('/trails/ratings/:id', 'trails#updateRating')
.get('/findstate', 'trails#getByState')

.get('/states', 'states#index')
.post('/states', 'states#create')
.post('/stateTrails/:id', 'states#populateStateTrails')

.get('/home', 'trails#indexTen')
;
