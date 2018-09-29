import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),

  circle: belongsTo('circle'),
  //client: belongsTo('client'),

  relatedRoles: hasMany('roles'),

  gigFinding: attr(),
  gigDoing: attr(),
  gigManagement: attr(),
  gigValue: attr(),
  gigValueDetails: attr(),
  description: attr(),

  expectedDuration: attr(),
  startDate: attr(),
  deadline: attr(),

  projectLead: belongsTo('user'),
  projectManager: belongsTo('user'),

  objectives: attr(),

  keyResults: attr(),
  stage: attr(),
  status: attr(),

  weeklyReport: attr(),

  lastUpdated: attr(),
  createAt: attr()
});
