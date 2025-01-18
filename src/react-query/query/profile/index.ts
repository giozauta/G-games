import { getProfileInfo } from "@/supabase/account";
import { useQuery } from "@tanstack/react-query";
import { PROFILE_QUERY_KEY } from "./enum";
import { getGamesById, getGamesByUserId } from "@/supabase/game";

export const useProfileInfo = (userId: string | undefined) => {
  return useQuery({
    queryKey: [PROFILE_QUERY_KEY.INFO],
    queryFn: () => getProfileInfo(userId),
    enabled: !!userId,
  });
};

//რომარა სუპაბეისის ერთი იუზერი სხვადასხვა იუზერის თამაშები წამოვიდოდა
export const useGamesInfoByUserId = (userId: string | undefined) => {
  return useQuery({
    queryKey: [PROFILE_QUERY_KEY.USER_GAMES, userId],
    queryFn: () => getGamesByUserId(userId),
    enabled: !!userId,
  });
};

export const useGamesById = (gameId: number | undefined) => {
  return useQuery({
    queryKey: [PROFILE_QUERY_KEY.GAMES, gameId],
    queryFn: () => getGamesById(gameId),
    enabled: !!gameId,
  });
};
