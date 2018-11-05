import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  description: attr(),
  doneEvidence: attr(),
  startDate: attr(),
  deadline: attr(),
  project: belongsTo('project'),
  role: belongsTo('role'),
  circle: belongsTo('circle'),
  createdBy: belongsTo('user'),
  lastUpdate: attr(),
  createdAt: attr()
});
