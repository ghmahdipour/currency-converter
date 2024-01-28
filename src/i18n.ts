import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// eslint-disable-next-line
i18n
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: ["en"],
    debug: false,
    lng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "htmlTag",
      ],
      caches: ["cookie"],
      cookieMinutes: 160,
      lookupQuerystring: "lang",
      lookupFromPathIndex: 0,
    },
    interpolation: {
      escapeValue: false
    },
    defaultNS: "common",
    nsSeparator: ":",
    keySeparator: "__",
  });

export default i18n;
