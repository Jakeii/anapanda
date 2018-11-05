import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  purpose: attr(),

  domains: attr(),
  accountabilities: attr(),
  successIndicatiors: attr(),

  circle: belongsTo('circle'),
  project: belongsTo('project'),

  birthdate: attr(),

  monthleyReport: attr(),
  // collaborators: hasMany('users'),
  // energisers: hasMany('users'),

  roleStatus: attr(),

  creator: belongsTo('user'),
  reports: attr(),

  createdAt: attr(),
  lastUpdated: attr()
});