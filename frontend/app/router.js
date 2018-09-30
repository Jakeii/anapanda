import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('tasks', { path: '/tasks' }, function() {
    this.route('make');
    this.route('single', { path: '/:id' })
  });
  this.route('calendar');
  this.route('circles');
  this.route('roles');
  this.route('projects');
  this.route('kummitments');
});

export default Router;
