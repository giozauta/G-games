import { useQuery } from "@tanstack/react-query";
import { HOME_QUERY_KEY } from "./enum";
import { getGames } from "@/supabase/home";

export const useGamesList = (debounceSearchText: string | number | null) => {
  return useQuery({
    queryKey: [HOME_QUERY_KEY.GAMES, debounceSearchText],
    queryFn: () => getGames(debounceSearchText),
  });
};
