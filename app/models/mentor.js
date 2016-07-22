import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import DS from 'ember-data';
// import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  githubAvatar: attr(),
  name: attr(),
  email: attr(),
  phone_number: attr(),
  slack_username: attr(),
  location: attr(),
  timezone: attr(),
  bio: attr()
});
