import { useQuery } from "@tanstack/react-query";
import { HOME_QUERY_KEY } from "./enum";
import { getGames, getGamesWithSearch } from "@/supabase/game";

export const useGamesListWithSearch = (
  debounceSearchText: string | number | null,
) => {
  return useQuery({
    queryKey: [HOME_QUERY_KEY.GAMES_BY_SEARCH, debounceSearchText],
    queryFn: () => getGamesWithSearch(debounceSearchText),
  });
};

export const useGamesList = () => {
  return useQuery({
    queryKey: [HOME_QUERY_KEY.GAMES_BY_SEARCH],
    queryFn: () => getGames(),
  });
};
