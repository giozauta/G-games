// import LangGuard from "@/components/lang-guard";
// import IsAuthLayout from "@/layouts/auth";
// import DefaultLayout from "@/layouts/default";
// import NotFound from "@/pages/404";

import {  Route, Routes } from "react-router-dom";
// import { AUTH_LAYOUT_ROUTES } from "./auth";
// import { DEFAULT_LAYOUT_ROUTES } from "./default";
import { Suspense } from "react";
import Loading from "@/components/loading";
import ScrollToTop from "@/components/scroll-to-top";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<div>home</div>}>
          <Route path="rame" element={<div>rame</div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
