import {
  defineNamespace,
  defineProjections,
  Model as InvoiceItemMixin
} from '../mixins/regenerated/models/i-i-s-another-test-project-invoice-item';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(InvoiceItemMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
