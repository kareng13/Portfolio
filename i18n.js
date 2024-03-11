import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from '/en.js';
import translationES from '/es.js';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    }
    // Aquí puedes agregar más idiomas según necesites
  },
  lng: 'es', // Idioma predeterminado
  fallbackLng: 'en', // Idioma de respaldo
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
