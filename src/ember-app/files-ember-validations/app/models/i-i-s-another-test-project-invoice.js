import {
  defineNamespace,
  defineProjections,
  Model as InvoiceMixin
} from '../mixins/regenerated/models/i-i-s-another-test-project-invoice';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(InvoiceMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
