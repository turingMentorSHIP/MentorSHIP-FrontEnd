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
  this.route('students');
  this.route('student', { path: '/student/:student_id' });
  this.route('how');
  this.route('start_auth');
  this.route('welcome');
});

export default Router;
