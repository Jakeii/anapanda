import { Model, attr, hasMany } from 'ember-data';

export default Model.extend({
  email: attr(),
  username: attr(),
  circles: hasMany('circle'),
  roles: hasMany('role'),
  kummitments: hasMany('kummitments'),
  tasks: hasMany('tasks')
});
