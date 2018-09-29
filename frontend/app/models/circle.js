import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  purpose: attr(),

  leadlink: belongsTo('user'),
  replink: belongsTo('user'),
  secretary: belongsTo('user'),
  facilitator: belongsTo('user'),
  crosslinks: belongsTo('user'),

  strategies: attr(),
  domains: attr(),
  policies: attr(),
  accountabilities: attr(),
  objectives: attr(),
  metrics: attr(),

  superCircle: belongsTo('circle' , { inverse: 'subCircles' }),
  subCircles: hasMany('circle', { inverse: 'superCircle' }),
  reports: attr(),

  lastUpdated: attr(),
  createdAt: attr()
});