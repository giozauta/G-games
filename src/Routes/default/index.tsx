import { GAME_PAGE_ROUTES } from "./game-page";
import { HOME_ROUTES } from "./home";
import { SIGN_IN_ROUTES } from "./sign-in";
import { SIGN_UP_ROUTES } from "./sign-up";

export const DEFAULT_LAYOUT_ROUTES = [
  ...HOME_ROUTES,
  ...SIGN_IN_ROUTES,
  ...SIGN_UP_ROUTES,
  ...GAME_PAGE_ROUTES,
];
