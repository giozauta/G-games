import { lazy } from "react";
import { Route } from "react-router-dom";
import { AUTH_LAYOUT_PATHS } from "../index.enum";

const AddGameLazy = lazy(() => import("@/pages/add-game"));

export const ADD_GAME_ROUTES = [
  <Route path={AUTH_LAYOUT_PATHS.ADD_GAME} element={<AddGameLazy />} />,
];
