const knex = require('../db');

const basicColumns = [
  'id', 'username', 'email'
];

/**
 * Get Single User by ID
 * @param {string} id
 * @return {promise}
 */
function getUserById(id) {
  return knex('users')
    .select(basicColumns)
    .where({id});
}

/**
 * Create user
 * @param {object} user
 * @return {promise}
 */
function createUser(user) {
  return knex('users')
    .insert(user)
    .returning(basicColumns);
}

/**
 * Update User
 * @param {string} id 
 * @param {object} user 
 * @return {promise}
 */
function updateUserById(id, user) {
  return knex('users')
    .update(user)
    .where({id})
    .returning(basicColumns);
}

/**
 * Delete User
 * @param {string} id 
 * @return {promise}
 */
function deleteUserById(id) {
  return knex('users')
    .delete()
    .where({ id })
    .returning(basicColumns);
}

module.exports = {
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
};