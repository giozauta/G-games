import { getProfileInfo } from "@/supabase/account";
import { useQuery } from "@tanstack/react-query";
import { PROFILE_QUERY_KEY } from "./enum";
import { getGamesByUserId } from "@/supabase/profile";
import { getGamesById } from "@/supabase/game";
import { useParams } from "react-router-dom";


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
    queryKey: [PROFILE_QUERY_KEY.USER_GAMES],
    queryFn: () => getGamesByUserId(userId),
    enabled: !!userId,
  });
};

export const useGamesById = (gameId: number | undefined) => {
  const {id}=useParams();
  return useQuery({
    queryKey: [PROFILE_QUERY_KEY.GAMES+id],
    queryFn: () => getGamesById(gameId),
    enabled: !!gameId,
  });
};
