import { ADD_GAME_ROUTES } from "./addGame";
import { PROFILE_ROUTES } from "./profile";

export const AUTH_LAYOUT_ROUTES = [...ADD_GAME_ROUTES, ...PROFILE_ROUTES];
