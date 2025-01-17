import { lazy } from "react";
import { Route } from "react-router-dom";
import { AUTH_LAYOUT_PATHS } from "../index.enum";

const ProfileLazy = lazy(() => import("@/pages/profile"));

export const PROFILE_ROUTES = [
  <Route path={AUTH_LAYOUT_PATHS.PROFILE} element={<ProfileLazy />} />,
];
