import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  _id:attr(),
  github_avatar: attr(),
  name: attr(),
  email: attr(),
  phone_number: attr(),
  slack_username: attr(),
  cohort: attr()
});
