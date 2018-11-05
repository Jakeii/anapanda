const Queries = require('./queries');

class ProjectsQueries extends Queries {
  constructor() {
    super('projects');
  }
}
module.exports = () => new ProjectsQueries();