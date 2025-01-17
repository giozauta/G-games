import { lazy } from "react";
import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATH } from "../index.enum";

const SignIn = lazy(() => import("@/pages/sign-in"));

export const SIGN_IN_ROUTES = [
  <Route path={DEFAULT_LAYOUT_PATH.SIGN_IN} element={<SignIn />} />,
];
