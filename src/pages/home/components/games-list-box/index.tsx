import React from "react";
import GameCard from "./components/game-card";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { useGamesList } from "@/react-query/query/home";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";

const GamesListBox: React.FC = () => {
  const [searchParams,] = useSearchParams();
  console.log(searchParams.toString());
  //
  const { control,  } = useForm({
    defaultValues: {
      search: "",
    },
  });
//


  const { t } = useTranslation();

  const {
    data: gamesList,
    
    isLoading,
    isError,
  } = useGamesList("teken");

  // const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const search = event.target.value;
  //   console.log(search);
  // };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="border-[1px]  dark:border-[#f75b1d71] border-[#6ec1e4] bg-[#fcfbf5] shadow-lg dark:bg-black flex flex-col p-2 sm:p-10 md:p-20  rounded-3xl gap-10 mt-20 sm:mt-40 md:mt-60 lg:mt-80 w-[82%] mx-auto h-[700px] sm:h-[800px] md:h-[900px] ">
      <div className=" flex flex-col gap-4 items-start sm:flex-row sm:items-center  justify-center ">
        <div className=" flex justify-center sm:justify-start w-full text-6xl sm:w-2/3 font-chakra-petch">
          {t("listBox.all-games")}
        </div>
        <div className="relative w-[70%] mx-auto sm:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6ec1e4] dark:text-[#60D600]" />

          <Controller
            name="search"
            control={control}
            render={() => {
              return (
                <Input
                  type="text"
                  className="h-10 w-full rounded-lg dark:bg-black border dark:border-[#60D600] border-[#6ec1e4] pl-10 pr-4"
                  placeholder={t("listBox.search")}
                />
              );
            }}
          />
        </div>
      </div>
      <div className=" gap-10 flex flex-wrap justify-center  sm:mt-10  overflow-y-scroll h-[500px]">
        {gamesList?.map((game) => {
          return <GameCard key={game.id} gameData={game} />;
        })}
      </div>
    </div>
  );
};

export default GamesListBox;
