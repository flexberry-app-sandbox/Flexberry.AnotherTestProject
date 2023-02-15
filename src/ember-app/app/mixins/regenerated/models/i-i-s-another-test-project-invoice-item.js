import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  product: DS.belongsTo('i-i-s-another-test-project-product', { inverse: null, async: false }),
  invoice: DS.belongsTo('i-i-s-another-test-project-invoice', { inverse: 'invoiceItem', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-another-test-project-invoice-item.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-another-test-project-invoice-item.validations.product.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  invoice: {
    descriptionKey: 'models.i-i-s-another-test-project-invoice-item.validations.invoice.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceItemE', 'i-i-s-another-test-project-invoice-item', {
    amount: attr('Amount', { index: 0 }),
    product: belongsTo('i-i-s-another-test-project-product', 'Product', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
