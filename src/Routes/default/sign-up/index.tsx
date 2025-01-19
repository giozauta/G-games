import { lazy } from "react";
import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATH } from "../index.enum";

const SignUpLazy = lazy(() => import("@/pages/sign-up"));

export const SIGN_UP_ROUTES = [
  <Route key={DEFAULT_LAYOUT_PATH.SIGN_UP} path={DEFAULT_LAYOUT_PATH.SIGN_UP} element={<SignUpLazy />} />,
];
