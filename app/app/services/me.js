import Service, { inject as service } from '@ember/service';
import { getOwner } from '@ember/application';
import { alias } from '@ember/object/computed';
import RSVP from 'rsvp';

export default Service.extend({
  session: service(),
  store: service(),

  load() {
    const authenticator = getOwner(this).lookup('authenticator:jwt');
    const session = this.session.data.authenticated;

    let tokenData;
    if (session && session.token) {
      tokenData = authenticator.getTokenData(session.token);
      return this.store.findRecord('user', tokenData.id).then((user) => this.set('user', user), () => this.session.invalidate());
    }
    return RSVP.resolve();
  },

  isAuthenticated: alias('session.isAuthenticated'),

  register(fields) {
    let user = this.store.createRecord('user', fields);

    let {username, password} = fields;

    return user.save().then(() => {
      return this.authenticate(username, password);
    });
  },

  authenticate(username, password) {
    var credentials = {username, password};
    return this.session.authenticate('authenticator:jwt', credentials).then(() => {
      return this.load();
    });
  }
});
