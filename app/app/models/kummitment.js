import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  task: belongsTo('task'),
  kummitor: belongsTo('user'),

  successActions: attr(),
  nextAction: attr(),
  possibleObstacles: attr(),
  minutesEstimate: attr(),

  start: attr(),
  deadline: attr(),

  energyType: attr(),
  weekScheduled: attr(),
  dayScheduled: attr(),
  time_Scheduled: attr(),

  status: attr(),
  specific: attr(),
  measurable: attr(),

  achievable: attr(),
  relevant: attr(),
  timebound: attr(),
  healthy: attr(),
  wealthy: attr(),
  wise: attr(),
  connected: attr(),
  reflection: attr(),

  needhelp: attr(),
  problem_needing_help: attr(),

  lastUpdated: attr(),
  createdAt: attr()
});