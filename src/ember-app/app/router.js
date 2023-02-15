import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-another-test-project-client-l');
  this.route('i-i-s-another-test-project-client-e',
  { path: 'i-i-s-another-test-project-client-e/:id' });
  this.route('i-i-s-another-test-project-client-e.new',
  { path: 'i-i-s-another-test-project-client-e/new' });
  this.route('i-i-s-another-test-project-invoice-l');
  this.route('i-i-s-another-test-project-invoice-e',
  { path: 'i-i-s-another-test-project-invoice-e/:id' });
  this.route('i-i-s-another-test-project-invoice-e.new',
  { path: 'i-i-s-another-test-project-invoice-e/new' });
  this.route('i-i-s-another-test-project-product-l');
  this.route('i-i-s-another-test-project-product-e',
  { path: 'i-i-s-another-test-project-product-e/:id' });
  this.route('i-i-s-another-test-project-product-e.new',
  { path: 'i-i-s-another-test-project-product-e/new' });
});

export default Router;
