import { DEFAULT_LAYOUT_PATH } from "@/Routes/default/index.enum";
import { useParams, Outlet, Navigate } from "react-router-dom";

const LangGuard: React.FC = () => {
  const { lang } = useParams();
  const currentLang = lang ?? "en";
  const langs = ["en", "ka"];

  if (!langs.includes(currentLang)) {
    return <Navigate to={`/en/${DEFAULT_LAYOUT_PATH.HOME}`} />;
  }
  return <Outlet />;
};

export default LangGuard;
