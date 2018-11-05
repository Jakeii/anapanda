import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit() {
      this.model.save().then((project) => this.transitionToRoute('projects.single', project));
    }
  }
});