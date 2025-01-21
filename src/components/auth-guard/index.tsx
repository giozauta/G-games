import { Navigate, useLocation } from "react-router-dom";
import { PropsWithChildren } from "react";
import i18next from "i18next";
import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = localStorage.getItem("userSession");
  const lang = i18next.language;
  const currentLang = lang ?? "en";
  const location = useLocation();

  if (!user) {
    return (
      <Navigate state={{ from: location }} to={`/${currentLang}/${DEFAULT_LAYOUT_PATH.SIGN_IN}`} />
    );
  }

  return children;
};

export default AuthGuard;
