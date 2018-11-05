const Queries = require('./queries');

class CirclesQueries extends Queries {
  constructor() {
    super('circles');
  }
}
module.exports = () => new CirclesQueries();