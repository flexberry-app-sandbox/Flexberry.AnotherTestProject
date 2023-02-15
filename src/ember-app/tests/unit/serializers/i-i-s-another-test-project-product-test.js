import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-another-test-project-product', 'Unit | Serializer | i-i-s-another-test-project-product', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-another-test-project-product',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
