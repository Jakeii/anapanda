import DS from 'ember-data';

export default DS.Model.extend({
  subject: DS.attr(),
  description: DS.attr(),
  done_evidence: DS.attr(),
  start_date: DS.attr(),
  deadline: DS.attr(),
  project: DS.attr(),
  role: DS.attr(),
  circle: DS.attr(),
  created_by: DS.attr(),
  last_update: DS.attr(),
  created_at: DS.attr()
});
