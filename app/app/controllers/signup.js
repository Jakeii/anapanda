import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import validate from 'validate.js';

export default Controller.extend({
  me: service(),

  actions: {
    submit() {
      let fields = this.getProperties('username', 'email', 'password');

      this.me.register(fields);
      // },(err) => {
      //   this.set('errors', err.errors);
      // });
    }
  },


  validateUsername() {
    let errors = validate.single(this.username, {
        presence: {
          allowEmpty: false
        }
    });

    this.set('errors.username', errors);
  },

  validateEmail() {
    let errors = validate.single(this.email, {
      presence: {
        allowEmpty: false
      }
    });

    this.set('errors.email', errors);
  },

  validatePassword() {
    let errors = validate.single(this.password, {
      presence: {
        allowEmpty: false
      }
    });

    this.set('errors.password', errors);
  }
});