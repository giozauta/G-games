import { useParams, Outlet, Navigate } from "react-router-dom";

const LangGuard: React.FC = () => {
  const { lang } = useParams();
  const currentLang = lang ?? "en";
  const langs = ["en", "ka"];

  if (!langs.includes(currentLang)) {
    return <Navigate to={"/en/home"} />;
  }
  return <Outlet />;
};

export default LangGuard;
