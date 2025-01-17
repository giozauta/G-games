import { lazy } from "react";
import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATH } from "../index.enum"
const GamePageLazy = lazy(() => import("@/pages/game-page"));

export const GAME_PAGE_ROUTES = [
  <Route
    path={DEFAULT_LAYOUT_PATH.GAME_PAGE + "/:id"}
    element={<GamePageLazy />}
  />,
];
