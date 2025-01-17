import LangGuard from "@/components/lang-guard";
import IsAuthLayout from "@/layouts/auth";
import DefaultLayout from "@/layouts/default";
import NotFound from "@/pages/404";

import { Navigate, Route, Routes } from "react-router-dom";
import { AUTH_LAYOUT_ROUTES } from "./auth";
import { DEFAULT_LAYOUT_ROUTES } from "./default";
import { Suspense } from "react";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path=":lang" element={<LangGuard />}>
          <Route element={<IsAuthLayout />}>{AUTH_LAYOUT_ROUTES}</Route>
          <Route element={<DefaultLayout />}>{DEFAULT_LAYOUT_ROUTES}</Route>
        </Route>
        <Route path="/" element={<Navigate to="/en/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
