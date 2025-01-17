import { lazy } from "react";
import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATH } from "../index.enum";

const HomeListViews = lazy(() => import("@/pages/home/views/home-list-views"));

export const HOME_ROUTES = [
  <Route path={DEFAULT_LAYOUT_PATH.HOME} element={<HomeListViews />} />,
];
