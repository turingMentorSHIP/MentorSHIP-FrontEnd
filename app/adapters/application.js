import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://mentorship-turing-backend.herokuapp.com',
  namespace: 'api/v1'
});
