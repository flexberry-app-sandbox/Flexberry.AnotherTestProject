import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.подсистема-продаж.caption'),
          title: i18n.t('forms.application.sitemap.подсистема-продаж.title'),
          children: [{
            link: 'i-i-s-another-test-project-invoice-l',
            caption: i18n.t('forms.application.sitemap.подсистема-продаж.i-i-s-another-test-project-invoice-l.caption'),
            title: i18n.t('forms.application.sitemap.подсистема-продаж.i-i-s-another-test-project-invoice-l.title'),
            icon: 'list',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.caption'),
            title: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.title'),
            children: [{
              link: 'i-i-s-another-test-project-client-l',
              caption: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-another-test-project-client-l.caption'),
              title: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-another-test-project-client-l.title'),
              icon: 'suitcase',
              children: null
            }, {
              link: 'i-i-s-another-test-project-product-l',
              caption: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-another-test-project-product-l.caption'),
              title: i18n.t('forms.application.sitemap.подсистема-продаж.справочники.i-i-s-another-test-project-product-l.title'),
              icon: 'archive',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})