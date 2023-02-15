import { Serializer as InvoiceSerializer } from
  '../mixins/regenerated/serializers/i-i-s-another-test-project-invoice';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(InvoiceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
