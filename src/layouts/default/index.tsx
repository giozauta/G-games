import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default DefaultLayout;
