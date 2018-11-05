const Queries = require('./queries');

class RoleQueries extends Queries {
  constructor() {
    super('roles');
  }
}
module.exports = () => new RoleQueries();