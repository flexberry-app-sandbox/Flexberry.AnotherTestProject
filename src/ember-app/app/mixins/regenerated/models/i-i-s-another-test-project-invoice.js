import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  saleDate: DS.attr('date'),
  client: DS.belongsTo('i-i-s-another-test-project-client', { inverse: null, async: false }),
  invoiceItem: DS.hasMany('i-i-s-another-test-project-invoice-item', { inverse: 'invoice', async: false })
});

export let ValidationRules = {
  saleDate: {
    descriptionKey: 'models.i-i-s-another-test-project-invoice.validations.saleDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-another-test-project-invoice.validations.client.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  invoiceItem: {
    descriptionKey: 'models.i-i-s-another-test-project-invoice.validations.invoiceItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvoiceE', 'i-i-s-another-test-project-invoice', {
    saleDate: attr('Sale date', { index: 0 }),
    client: belongsTo('i-i-s-another-test-project-client', 'Client', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    invoiceItem: hasMany('i-i-s-another-test-project-invoice-item', 'Invoice item', {
      amount: attr('Amount', { index: 0 }),
      product: belongsTo('i-i-s-another-test-project-product', 'Product', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('InvoiceL', 'i-i-s-another-test-project-invoice', {
    saleDate: attr('Sale date', { index: 0 }),
    client: belongsTo('i-i-s-another-test-project-client', 'Name', {
      name: attr('Name', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
