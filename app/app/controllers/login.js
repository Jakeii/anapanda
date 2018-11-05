import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  me: service(),

  actions: {
    submit() {
      this.me.authenticate(this.username, this.password).then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});