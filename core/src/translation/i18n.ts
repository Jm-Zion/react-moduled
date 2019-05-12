import i18n from 'i18next';
import {
  initReactI18next,
  Trans,
  useTranslation,
  withTranslation,
} from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: {
          welcomToReact: 'Welcome to React and react-i18next',
        },
      },
      fr: {
        translation: {
          welcomToReact: 'Bienvenue sur react !',
        },
      },
    },
  });
export { Trans, useTranslation, withTranslation };
