import { updateLikes } from "@/supabase/game";
import { HOME_MUTATION_KEYS } from "./enum";
import { useMutation } from "@tanstack/react-query";

export const useLikesUpdate = () => {
  return useMutation({
    mutationKey: [HOME_MUTATION_KEYS.LIKES],
    mutationFn: (gameId: number) => updateLikes(gameId),
  });
};
