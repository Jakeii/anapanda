const environment = process.env.NODE_ENV || 'development';
let knexfile = require('../knexfile.js')[environment];

const config = {debug: false, ...knexfile};

module.exports = require('knex')(config);

// if (environment === 'frontend-testing') {
//   knex.migrate.rollback()
//     .then(() => { return knex.migrate.latest(); })
//     .then(() => { return knex.seed.run(); });
// }

module.exports.reconnect = () => require('knex')(config);