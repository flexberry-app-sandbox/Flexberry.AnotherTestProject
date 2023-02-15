import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-another-test-project-invoice', 'Unit | Model | i-i-s-another-test-project-invoice', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-another-test-project-client',
    'model:i-i-s-another-test-project-invoice-item',
    'model:i-i-s-another-test-project-invoice',
    'model:i-i-s-another-test-project-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
