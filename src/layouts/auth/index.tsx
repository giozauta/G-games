import AuthGuard from "@/components/auth-guard";
import Footer from "@/components/footer";
import Header from "@/components/header";

import React from "react";
import { Outlet } from "react-router-dom";

const IsAuthLayout: React.FC = () => {
  return (
    <>
      <Header />
      <AuthGuard>
        <Outlet />
      </AuthGuard>
      <Footer />
    </>
  );
};

export default IsAuthLayout;
