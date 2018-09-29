import { Model, attr, belongsTo } from 'ember-data';

export default Model.extend({
  subject: attr(),
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
