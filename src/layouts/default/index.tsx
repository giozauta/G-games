import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Header />
          <Outlet />
    </ThemeProvider>

  );
};

export default DefaultLayout;
