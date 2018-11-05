const knex = require('../db');

/**
 * Basic queries with simple CRUD queries for the database
 */
class Queries {
  constructor(tableName, defaultColumns = '') {
    this.tableName = tableName;
    this.defaultColumns = defaultColumns;
    this.table = knex(this.tableName);
  }

  static query() {
    return new this();
  }

  /**
   * Get Single Record by ID
   * @param {string} id
   * @return {promise}
   */
  getById(id) {
    return this.table
      .select(this.defaultColumns)
      .where({ id });
  }

  /**
   * Get All Records
   * @return {promise}
   */
  getAll() {
    return this.table
      .select(this.defaultColumns);
  }

  /**
   * Create Record
   * @param {object} attrs
   * @return {promise}
   */
  create(attrs) {
    return this.table
      .insert(attrs)
      .returning(this.defaultColumns);
  }

  /**
   * Update Record
   * @param {string} id 
   * @param {object} attrs 
   * @return {promise}
   */
  updateById(id, attrs) {
    return this.table
      .update(attrs)
      .where({ id })
      .returning(this.defaultColumns);
  }

  /**
   * Delete Record
   * @param {string} id 
   * @return {promise}
   */
  deleteById(id) {
    return knex(this.tableName)
      .delete()
      .where({ id });
  }
}

module.exports = Queries;