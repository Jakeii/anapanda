import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit() {
      this.model.save().then((task) => this.transitionToRoute('tasks.single', task));
    }
  }
});