import { moduleForModel, test } from 'ember-qunit';

moduleForModel('mentors', 'Unit | Model | mentors', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:timezone']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
