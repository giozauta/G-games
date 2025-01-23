import React from "react";
import ProfileGameCarusel from "./components/games-carusel";
import UserInfo from "./components/user-info";
import { useProfileInfo } from "@/react-query/query/profile";
import { useAtom } from "jotai";
import { Lang, userAtom } from "@/store/jotai";
import EditSwitch from "./components/edit-switch";

const Profile: React.FC = () => {
  const [user] = useAtom(userAtom);
  const userId = user?.user?.id;
  const currentLang = useAtom(Lang)[0];
  //
  const {
    data: userData,
    refetch,
    isLoading,
    isError,
  } = useProfileInfo(userId);
  //user info
  const userFullNameEn = userData?.first_name_en + " " + userData?.last_name_en;
  const userFullNameKa = userData?.first_name_ka + " " + userData?.last_name_ka;
  //
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-screen flex justify-center items-center">
        something went wrong...
      </div>
    );
  }
  if (!userData) {
    return (
      <div className="h-screen flex justify-center items-center">
        something went wrong...
      </div>
    );
  }
  //
  return (
    <div>
      <div className="relative lg:top-[-100px]  w-full h-[300px] sm:h-[400px] bg-bar bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50 z-10 "></div>

        <div className=" relative z-20 flex   sm:flex-row justify-between items-end w-[90%] sm:w-[70%] mx-auto h-full ">
          <div className=" text-white  flex flex-col font-bold text-left text-3xl sm:text-4xl font-chakra-petch mb-5">
            {currentLang === "en"
              ? userFullNameEn.toUpperCase()
              : userFullNameKa}

            <div className=" mt-4 flex gap-5 relative">
              <EditSwitch refetch={refetch} userData={userData} />
            </div>
          </div>

          <div className=" flex justify-center items-end ">
            <img
              src="/images/call-little.png"
              alt="man"
              className="w-32 sm:w-48 h-auto"
            />
          </div>
        </div>
      </div>

      <div className="dark:bg-custom-gradient  py-12   sm:mx-auto ">
        <div className=" items-center sm:items-start flex flex-col  lg:flex-row justify-between  h-auto lg:h-[400px] w-[90%] lg:w-[70%] mx-auto gap-8">
          <div className="flex-1 p-6 h-[250px] w-full justify-center items-center  bg-lightBlue dark:bg-gray-800/50 shadow-lg rounded-lg">
            <UserInfo userData={userData} currentLang={currentLang} />
          </div>
          <div className="flex-1 p-7  h-[250px]   w-full bg-lightBlue dark:bg-gray-800/50 shadow-lg rounded-lg ">
            <ProfileGameCarusel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
