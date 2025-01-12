import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import langSwitchEn from "./en/header/lang-switch.json"
import langSwitchKa from "./ka/header/lang-switch.json"

i18next.use(initReactI18next).init({
    lng: 'en', 
    debug: true,

    resources: {
      en: {
        translation:{"lang-switch":langSwitchEn}
      },
      ka:{
        translation:{"lang-switch":langSwitchKa}
      }
    }
  });