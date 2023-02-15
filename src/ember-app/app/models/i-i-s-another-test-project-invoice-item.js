import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as InvoiceItemMixin
} from '../mixins/regenerated/models/i-i-s-another-test-project-invoice-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(InvoiceItemMixin, Validations, {
});

defineProjections(Model);

export default Model;
