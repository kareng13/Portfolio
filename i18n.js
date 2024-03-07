import { useState } from "react";
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import en from '/en.js';
import es from '/es.js';

i18n
  .use(initReactI18next) // Usa react-i18next
  .init({
    // Lenguaje por defecto
    fallbackLng: 'es',
    // Recursos de lenguaje
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    // Activar el modo de depuración para facilitar la depuración
    debug: true,
    // Opcional: personaliza la clave que utilizas en tus archivos de idioma
    keySeparator: false,
    // Opcional: personaliza el orden de prioridad de los lenguajes
    interpolation: {
      escapeValue: false // No necesitas escapar los valores
    }
  });

export default i18n;