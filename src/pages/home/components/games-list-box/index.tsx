import React from "react";
import GameCard from "./components/game-card";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";
import { useGamesListWithSearch } from "@/react-query/query/home";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";
import qs from "qs";
import { GamesFilterFormValues } from "./components/types";
import { useDebounce } from "use-debounce";
import { Refetch } from "./types";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const GamesListBox: React.FC<{ refetch: Refetch }> = ({ refetch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  //

  const { control, watch } = useForm<GamesFilterFormValues>({
    defaultValues: qs.parse(searchParams.toString()) as GamesFilterFormValues,
  });
  //
  const searchText = watch("search");
  //
  const [debouncedSearchText] = useDebounce(searchText, 1000);
  //
  const { t } = useTranslation();
  //
  const {
    data: gamesList,
    isLoading,
    isError,
  } = useGamesListWithSearch(debouncedSearchText);
  //
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void,
  ) => {
    const newSearchText = event.target.value;

    setSearchParams({ searchText: newSearchText });

    onChange(newSearchText);
  };

  if (isLoading) {
    return (
      <div className="border-[1px]  dark:border-[#f75b1d71] border-[#6ec1e4] bg-[#fcfbf5] shadow-lg dark:bg-black flex flex-col p-2 sm:p-10 md:p-20  rounded-3xl gap-10 mt-20 sm:mt-40 md:mt-60 lg:mt-80 w-[82%] mx-auto h-[700px] sm:h-[800px] md:h-[900px]">
        Loading...
      </div>
    );
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="py-10 sm:py-0 border rounded-none sm:rounded-xl dark:border-[#f75b1d71] border-[#6ec1e4] bg-[#fcfbf5] shadow-lg dark:bg-black flex flex-col p-2 sm:p-10 md:p-20   gap-10 mt-20 sm:mt-40 md:mt-60 lg:mt-80 w-full  sm:w-[82%] mx-auto h-[700px] sm:h-[800px] md:h-[900px] ">
      <div className=" flex flex-col gap-4 items-start sm:flex-row sm:items-center  justify-center ">
        <div className="text-5xl sm:text-6xl pb-4 sm:pb-0 flex justify-center sm:justify-start w-full sm:w-2/3 font-chakra-petch ">
          {t("listBox.all-games")}
        </div>
        <div className="relative w-[70%] mx-auto sm:w-1/3 ">
          <Search className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6ec1e4] dark:text-[#60D600]" />

          <Controller
            name="search"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  type="text"
                  className="h-10 w-full rounded-lg dark:bg-black border  dark:border-[#60D600] border-[#6ec1e4] pl-10 pr-4"
                  placeholder={t("listBox.search")}
                  onChange={(e) => {
                    handleSearchChange(e, onChange);
                  }}
                  value={value}
                />
              );
            }}
          />
        </div>
      </div>

      <ScrollArea className="gap-10 flex flex-wrap justify-center sm:mt-10 overflow-y-scroll h-[500px] hide-scrollbar sm:visible-scrollbar">
        {gamesList?.map((game) => (
          <GameCard refetch={refetch} key={game.id} gameData={game} />
        ))}
      </ScrollArea>
    </div>
  );
};

export default GamesListBox;
