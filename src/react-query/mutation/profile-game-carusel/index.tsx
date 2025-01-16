import { useMutation } from "@tanstack/react-query";
import { PROFILE_GAME_CARUSEL_MUTATION_KEY } from "./enum";
import { deleteGamesById } from "@/supabase/profile";

export const useDeleteGame = () => {
  return useMutation({
    mutationKey: [PROFILE_GAME_CARUSEL_MUTATION_KEY.DELETE_GAME],
    mutationFn: deleteGamesById,
  });
};
