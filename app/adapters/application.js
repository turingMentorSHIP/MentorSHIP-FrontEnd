import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://turing-mentorship-api.herokuapp.com',
  namespace: 'api/v1'
});
