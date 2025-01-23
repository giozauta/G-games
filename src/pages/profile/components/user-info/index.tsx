import { ProfileInfoType } from "@/supabase/account/types";
import { useTranslation } from "react-i18next";

const UserInfo: React.FC<{
  userData: ProfileInfoType;
  currentLang: string;
}> = ({ userData, currentLang }) => {
  const { t } = useTranslation();
  //
  const phoneNumber = userData?.phoneNumber;
  const locationEn = userData?.location_en;
  const locationKa = userData?.location_ka;
  const genderEn = userData?.gender_en;
  const genderKa = userData?.gender_ka;
  const age = userData?.age;

  return (
    <div className="  text-black dark:text-white h-full  flex flex-col justify-center items-start ">
      <div>
        {t("profile.phone")}: {phoneNumber}
      </div>
      <div>
        {t("profile.location")}:{" "}
        {currentLang === "en" ? locationEn?.toUpperCase() : locationKa}
      </div>
      <div>
        {t("profile.gender")}:{" "}
        {currentLang === "en" ? genderEn?.toUpperCase() : genderKa}
      </div>
      <div>
        {t("profile.age")}: {age}
      </div>
    </div>
  );
};

export default UserInfo;
