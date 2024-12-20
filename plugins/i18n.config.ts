// plugins/I18nD.config.ts
import { createI18n } from 'vue-i18n';
import { languages } from '~/locales/index';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'kh', 
    fallbackLocale: 'en',
    messages: {
      en: languages.EN,
      kh: languages.KH,
      zh: languages.ZN
    }
  });

  vueApp.use(i18n);
});