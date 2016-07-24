import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('mentor', params.mentor_id);
  }
});
