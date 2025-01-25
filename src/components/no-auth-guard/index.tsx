import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import i18next from "i18next";
import { AUTH_LAYOUT_PATHS } from "@/Routes/auth/index.enum";

const NoAuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  //ეს კომპონენტი გვჭირდება რომ დალოგინებული იუზერი აღარ შევიდეს ლოგინ გვერდზე
  const user = localStorage.getItem("userSession");
  const lang = i18next.language;
  const currentLang = lang ?? "en";

  if (user) {
    return <Navigate to={`/${currentLang}/${AUTH_LAYOUT_PATHS.PROFILE}`} />;
  }

  return children;
};

export default NoAuthGuard;
