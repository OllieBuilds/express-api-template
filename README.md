# Trail Tracker API

RESTful API built with express.js.

## Dependencies

Install with `npm install`.

-   [`express`](http://expressjs.com/)
-   [`mongoose`](http://mongoosejs.com/)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Replace all instances of `'trail-trakcer'` with your app name. This
    includes `package.json`, various debugger configurations, and the MongoDB
    store.
1.  Install dependencies with `npm install`.
1.  Set a SECRET_KEY in the environment.
1.  Run the API server with `npm start`. If you want your code to be reloaded on
    change, you should `npm install -g nodemon` and use `nodemon` instead of
    `npm start`.


## API

Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`scripts`](scripts) to test built-in actions. Add your
own scripts to test your custom API.

### Available Routes

| Verb   | URI Pattern            | Action                     |
|--------|------------------------|----------------------------|
| GET    | `/trails`              | `returns all trails`       |
| POST   | `/trails`              | `create new trail`         |
| GET    | `/state/:state`        | `returns trails by state`  |
| DELETE | `/trails/:id`          | `delete trail by id`       |
