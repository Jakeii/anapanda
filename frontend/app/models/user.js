import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  email: attr(),
  username: attr(),
  circles: hasMany('circle'),
  roles: hasMany('role'),
  kummitments: hasMany('kummitments'),
  tasks: hasMany('tasks')
});
