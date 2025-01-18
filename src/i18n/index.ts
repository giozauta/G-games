import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import switchEn from "./en/header/switch.json";
import switchKa from "./ka/header/switch.json";
import navbarEn from "./en/header/navbar.json";
import navbarKa from "./ka/header/navbar.json";
import heroEn from "./en/pages/home/hero.json";
import heroKa from "./ka/pages/home/hero.json";
import listBoxEn from "./en/pages/home/games-list-box.json";
import listBoxKa from "./ka/pages/home/games-list-box.json";
import footerEn from "./en/footer/footer.json";
import footerKa from "./ka/footer/footer.json";
import profileEn from "./en/pages/profile/profile.json";
import profileKa from "./ka/pages/profile/profile.json";
import placeHolderEn from "./en/pages/profile/placeholder.json";
import placeholderKa from "./ka/pages/profile/placeholder.json";
import placeholderEnGeorgian from "./en/pages/profile/placeholder-ka.json";
import placeholderKaGeorgian from "./ka/pages/profile/placeholder-ka.json";
import addGameEn from "./en/pages/add-game/add-game.json";
import addGameKa from "./ka/pages/add-game/add-game.json";
import signInEn from "./en/pages/sign/sign.json";
import signInKa from "./ka/pages/sign/sign.json";
import signErrorsEn from "./en/form-errors/sign-errors.json";
import signErrorsKa from "./ka/form-errors/sign-errors.json";
import addGameErrorsEn from "./en/form-errors/game-errors.json";
import addGameErrorsKa from "./ka/form-errors/game-errors.json";
import editProfileErrorsEn from "./en/form-errors/edit-profile-errors.json";
import editProfileErrorsKa from "./ka/form-errors/edit-profile-errors.json";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,

  resources: {
    en: {
      translation: {
        switch: switchEn,
        navbar: navbarEn,
        hero: heroEn,
        listBox: listBoxEn,
        footer: footerEn,
        profile: profileEn,
        profilePlaceholder: placeHolderEn,
        profilePlaceholderKa: placeholderEnGeorgian,
        addGame: addGameEn, //using in : add game and edit game page
        sign: signInEn,
        signErrors: signErrorsEn,
        addGameErrors: addGameErrorsEn,
        editProfileErrors: editProfileErrorsEn,
      },
    },
    ka: {
      translation: {
        switch: switchKa,
        navbar: navbarKa,
        hero: heroKa,
        listBox: listBoxKa,
        footer: footerKa,
        profile: profileKa,
        profilePlaceholder: placeholderKa,
        profilePlaceholderKa: placeholderKaGeorgian,
        addGame: addGameKa, //using in : add game and edit game page
        sign: signInKa,
        signErrors: signErrorsKa,
        addGameErrors: addGameErrorsKa,
        editProfileErrors: editProfileErrorsKa,
      },
    },
  },
});
