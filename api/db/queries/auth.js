const knex = require('../db');

function getUserWithHash(identification) {
  return knex('users')
    .select(['id', 'hash'])
    .where({email: identification})
    .orWhere({username: identification});
}

module.exports = {
  getUserWithHash
};