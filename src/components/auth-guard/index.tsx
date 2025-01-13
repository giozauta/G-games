import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import i18next from "i18next";

const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = localStorage.getItem("userSession");
  const lang = i18next.language;
  const currentLang = lang ?? "en";

  if (!user) {
    return <Navigate to={`/${currentLang}/sign-in`} replace />;
  }

  return children;
};

export default AuthGuard;
