import { Navigate, useLocation } from "react-router-dom";
import { PropsWithChildren } from "react";
import i18next from "i18next";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = localStorage.getItem("userSession");
  const lang = i18next.language;
  const currentLang = lang ?? "en";
  const location = useLocation();

  if (!user) {
    return (
      <Navigate state={{ from: location }} to={`/${currentLang}/sign-in`} />
    );
  }

  return children;
};

export default AuthGuard;
