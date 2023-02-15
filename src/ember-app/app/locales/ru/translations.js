import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Another test project',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Another test project',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Another test project',
          title: 'Another test project'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
