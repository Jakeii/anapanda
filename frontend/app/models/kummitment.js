import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  task: belongsTo('task'),
  kummitor: belongsTo('user'),

  success_actions: attr(),
  next_action: attr(),
  possible_obstacles: attr(),
  minutes_estimate: attr(),

  start: attr(),
  deadline: attr(),

  energy_type: attr(),
  week_scheduled: attr(),
  day_scheduled: attr(),
  time_scheduled: attr(),

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

  last_updated: attr(),
  created_at: attr()
});