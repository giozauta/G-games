import { useTranslation } from "react-i18next";

const UserInfo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full w-full   text-black dark:text-white flex flex-col justify-center items-start">
      <div>{t("profile.phone")}: 597 55 55 55</div>
      <div>{t("profile.location")}: Tbilisi, Georgia</div>
      <div>{t("profile.gender")}: Male</div>
      <div>{t("profile.age")}: 20</div>
    </div>
  );
};

export default UserInfo;
