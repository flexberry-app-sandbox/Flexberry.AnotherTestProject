import { Serializer as InvoiceItemSerializer } from
  '../mixins/regenerated/serializers/i-i-s-another-test-project-invoice-item';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(InvoiceItemSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
