const Queries = require('./queries');

class KummitmentQueries extends Queries {
  constructor() {
    super('kummitments');
  }

  getStartDateBetween(start, end) {
    return this.table
      .select(this.defaultColumns)
      .whereBetween('startDate', start, end);
  }
}
module.exports = () => new KummitmentQueries();