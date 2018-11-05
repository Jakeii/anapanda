const Queries = require('./queries');

class TaskQueries extends Queries {
  constructor() {
    super('tasks');
  }
}
module.exports = () => new TaskQueries();