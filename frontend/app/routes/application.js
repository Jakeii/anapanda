import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import { inject as service } from '@ember/service';

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  me: service(),

  beforeModel() {
    return this._loadMe();
  },

  _loadMe() {
    return this.me.load();
  }
});
