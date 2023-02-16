import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISAnotherTestProjectClientLForm from './forms/i-i-s-another-test-project-client-l';
import IISAnotherTestProjectInvoiceLForm from './forms/i-i-s-another-test-project-invoice-l';
import IISAnotherTestProjectProductLForm from './forms/i-i-s-another-test-project-product-l';
import IISAnotherTestProjectClientEForm from './forms/i-i-s-another-test-project-client-e';
import IISAnotherTestProjectInvoiceEForm from './forms/i-i-s-another-test-project-invoice-e';
import IISAnotherTestProjectProductEForm from './forms/i-i-s-another-test-project-product-e';
import IISAnotherTestProjectClientModel from './models/i-i-s-another-test-project-client';
import IISAnotherTestProjectInvoiceItemModel from './models/i-i-s-another-test-project-invoice-item';
import IISAnotherTestProjectInvoiceModel from './models/i-i-s-another-test-project-invoice';
import IISAnotherTestProjectProductModel from './models/i-i-s-another-test-project-product';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-another-test-project-client': IISAnotherTestProjectClientModel,
    'i-i-s-another-test-project-invoice-item': IISAnotherTestProjectInvoiceItemModel,
    'i-i-s-another-test-project-invoice': IISAnotherTestProjectInvoiceModel,
    'i-i-s-another-test-project-product': IISAnotherTestProjectProductModel
  },

  'application-name': 'Подсистема продаж',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Подсистема продаж',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Подсистема продаж',
          title: 'Подсистема продаж'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'подсистема-продаж': {
          caption: 'Подсистема продаж',
          title: 'Подсистема продаж',
          'i-i-s-another-test-project-invoice-l': {
            caption: 'Накладная',
            title: ''
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-another-test-project-client-l': {
              caption: 'Клиент',
              title: 'Client'
            },
            'i-i-s-another-test-project-product-l': {
              caption: 'Товар',
              title: 'Product'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-another-test-project-client-l': IISAnotherTestProjectClientLForm,
    'i-i-s-another-test-project-invoice-l': IISAnotherTestProjectInvoiceLForm,
    'i-i-s-another-test-project-product-l': IISAnotherTestProjectProductLForm,
    'i-i-s-another-test-project-client-e': IISAnotherTestProjectClientEForm,
    'i-i-s-another-test-project-invoice-e': IISAnotherTestProjectInvoiceEForm,
    'i-i-s-another-test-project-product-e': IISAnotherTestProjectProductEForm
  },

});

export default translations;
