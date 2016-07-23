import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('sign-up');
  this.route('mentors');
  this.route('mentor', { path: '/mentor/:mentor_id' });
});

export default Router;
